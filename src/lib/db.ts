import { neon } from '@neondatabase/serverless';

export interface InquiryRecord {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  service_type: string;
  guest_count?: number;
  event_date?: string;
  notes?: string;
  created_at?: string;
}

// In-memory fallback for instant local preview if DATABASE_URL is not yet provided
const demoInquiries: InquiryRecord[] = [
  {
    id: 1,
    name: "Matt Higgins",
    phone: "0428 112 345",
    email: "matt.higgins@beechworthfooty.com.au",
    service_type: "Club Pizza Feast",
    guest_count: 45,
    event_date: "2026-10-24",
    notes: "15 Large Pizzas (BBQ Meatlovers, Margherita, Pepperoni, Veg Supreme) plus 8 garlic breads for Beechworth junior sports presentation evening.",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    phone: "0439 556 778",
    email: "sarah.j@highcountryevents.com.au",
    service_type: "Family Gathering / Party",
    guest_count: 28,
    event_date: "2026-11-02",
    notes: "Gourmet pizza banquet, cheesy garlic breads, and Nutella calzones for family gathering in Beechworth.",
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 3,
    name: "Tom Bradley",
    phone: "0412 889 001",
    email: "tom@beechworthbrew.com.au",
    service_type: "Trade Crew & Corporate Lunch",
    guest_count: 16,
    event_date: "2026-10-18",
    notes: "Family meal deal bundles, Buffalo wings, and Italian pastas for brewery team Friday lunch run.",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  }
];

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.includes('your_password') || connectionString.includes('placeholder')) {
    return null;
  }
  return neon(connectionString);
}

export async function initDb() {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS beechworth_pizza_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        service_type VARCHAR(100) NOT NULL,
        guest_count INT,
        event_date VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return true;
  } catch (err) {
    console.error('Failed to initialize Neon database table:', err);
    return false;
  }
}

export async function saveInquiry(inquiry: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<InquiryRecord> {
  const sql = getDb();

  if (!sql) {
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: demoInquiries.length + 1,
      created_at: new Date().toISOString()
    };
    demoInquiries.unshift(newRecord);
    return newRecord;
  }

  await initDb();

  const result = await sql`
    INSERT INTO beechworth_pizza_inquiries (name, phone, email, service_type, guest_count, event_date, notes)
    VALUES (
      ${inquiry.name},
      ${inquiry.phone},
      ${inquiry.email || null},
      ${inquiry.service_type},
      ${inquiry.guest_count || null},
      ${inquiry.event_date || null},
      ${inquiry.notes || null}
    )
    RETURNING id, name, phone, email, service_type, guest_count, event_date, notes, created_at;
  `;

  return result[0] as unknown as InquiryRecord;
}

export async function getInquiries(): Promise<{ inquiries: InquiryRecord[]; isLiveDb: boolean }> {
  const sql = getDb();

  if (!sql) {
    return { inquiries: demoInquiries, isLiveDb: false };
  }

  try {
    await initDb();
    const rows = await sql`
      SELECT id, name, phone, email, service_type, guest_count, event_date, notes, created_at
      FROM beechworth_pizza_inquiries
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return { inquiries: rows as unknown as InquiryRecord[], isLiveDb: true };
  } catch (err) {
    console.error('Error fetching from Neon database:', err);
    return { inquiries: demoInquiries, isLiveDb: false };
  }
}
