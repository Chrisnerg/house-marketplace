import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { agenciesTable } from '../model/agencies.model.js';

export const postAgency = async (agencyName, licenseNumber, officeAddress, website, yearsInBusiness, verificationStatus, isVerified) => {
    const [agency] = await db.insert(agenciesTable).values({
        agencyName, 
        licenseNumber, 
        officeAddress, 
        website, 
        yearsInBusiness, 
        verificationStatus, 
        isVerified
    }).returning({
        agencyId: agenciesTable.id
    });

    return agency.agencyId;
};

export const findAgencies = async () => {
    const agencies = await db.select().from(agenciesTable);

    return agencies;
};

export const findAgencyById = async (id) => {
    const [agency] = await db.select().from(agenciesTable).where(eq(agenciesTable.id, id));

    return agency;
};