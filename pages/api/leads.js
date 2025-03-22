import Leads from "../../src/models/Leads";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, phone, message } = req.body;
            const newLead = await Leads.create({ name, email, phone, message });

            return res.status(201).json({ success: true, data: newLead });
        } catch (error) {
            console.error('Error creating lead:', error);
            return res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
