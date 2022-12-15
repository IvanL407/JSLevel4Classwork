function countDuplicates(array, itm)
{
    var itmCount = 0;
    for (var i = 0; i < array.length; i++)
        if (itm == array[i])
            itmCount++;
    return itmCount;
}

function indexesOf(array, itm)
{
    var idxList = [];
    for (var i = 0; i < array.length; i++)
        if (itm == array[i])
            idxList.push(i);
    return idxList;
}

function getDupeList()
{
    dupesList = indexOf(foodList, foodSelectionBox.value)
    display();
}

function getDupeCount()
{
    dupesCount = countDuplicates(foodList, foodSelectionBox.value);
    display();
}