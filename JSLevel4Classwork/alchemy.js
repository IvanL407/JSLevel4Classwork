const ORGANISM_LIST = ["Air;None;None", "Earth;None;None", "Fire;None;None", "Water;None;None", "Alchohol;Fire;Water", "Dust;Air;Earth", "Energy;Air;Fire", "Lava;Earth;Fire", "Swamp;Earth;Water", "Mud;Dust;Water", "Life;Energy;Swamp", "Bacteria;Life;Swamp", "Fire Elemental;Fire;Life", "Stone;Air;Lava", "Metal;Stone;Fire", "Electricity;Energy;Metal", "Oxygen;Water;Electricity"];

const ORGANISM_OFFSET = 4;
const NAME = 0; PARENT_1 = 1; PARENT_2 = 2;
const NONE = "None";

function getOrganismName(organism)
{
    return organism.split(";")[NAME];
}

function getFirstParent(organism)
{
    return organism.split(";")[PARENT_1];
}

function getSecondParent(organism)
{
    return organism.split(";")[PARENT_2];
}

function getOrganismData(organism, idx)
{
    return organism.split(";")[idx];
}

function areParents(organism, parent1, parent2)
{
    var firstParent = getOrganismData(organism, PARENT_1);
    var secondParent = getOrganismData(organism, PARENT_2);
    var parent1 = getOrganismData(parent1, NAME);
    var parent2 = getOrganismData(parent2, NAME);

    if (firstParent == parent1 || secondParent == parent1)
    {
        if (firstParent == parent2 || secondParent == parent2)
        {
            return true;
        }
    }
    return false;
}

function findOrganism(orgname)
{
    for (var i in ORGANISM_LIST)
    {
        if (getOrgansimData(ORGNAISM_LIST[i], NAME) == orgname)
            return ORGANISM_LIST[i];
    }
    return NONE;
}

