import Lead from '../models/Leads.js';

export const createLead = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const lead = await Lead.create({ name, email, phone, message });
        return res.status(201).json({ success: true, lead });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};