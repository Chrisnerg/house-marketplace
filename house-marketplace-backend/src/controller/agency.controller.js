import { postAgency, findAgencies, findAgencyById } from "../service/agency.service.js";

export const registerAgency = async (req, res) => {
    try {
        const {agencyName, licenseNumber, officeAddress, website, yearsInBusiness, verificationStatus, isVerified} = req.body;

        const agencyId = await postAgency(agencyName, licenseNumber, officeAddress, website, yearsInBusiness, verificationStatus, isVerified);

        return res.status(201).json({ agencyId });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to register agency.'})
    }
};

export const getAgencyById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ error: 'Invalid agency id.' });
        }

        const agency = await findAgencyById(id);

        if (!agency) {
            return res.status(404).json({ error: 'Agency not found.' });
        }

        return res.json({ agency });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get agency information.'})
    }
};

export const getAllAgencies = async (req, res) => {
    try {
        const agencies = await findAgencies();

        return res.json({ agencies });
    } catch (error) {
        return res.status(400).json({ error: 'Failed fetching agencies from db.'})
    }
};