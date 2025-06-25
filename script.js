// script.js (Full Updated Code with French Translations)

// --- Translations Dictionary ---
const translations = {
  en: {
    // General & UI
    appTitle: "Pests & Diseases Management",
    pageTitlePlanning: "Crop Protection Planning",
    pageTitleCalendar: "Treatment Calendar",
    pageTitleInventory: "Product Inventory",
    pageTitleReport: "Crop Protection Report",
    languageLabel: "Language:",
    planningDropdownBtn: "Planning",
    calendarDropdownBtn: "Calendar",
    inventoryDropdownBtn: "Inventory",
    reportDropdownBtn: "Report",
    closeBtn: "Close",
    cancelBtn: "Cancel",
    saveBtn: "Save",
    yesDeleteBtn: "Yes, Delete",
    okBtn: "OK",
    addBtn: "Add",
    removeBtn: "Remove",
    detailsBtnTitle: "Details",
    editBtnTitle: "Edit",
    deleteBtnTitle: "Delete",
    units: "units",
    otherUnit: "other",
    selectUnitPlaceholder: "Select Unit...",
    yesContinueBtn: "Yes, Continue",
    noGoBackBtn: "No, Go Back and Edit",
    hourAbbr: "HH",
    minuteAbbr: "MM",
    na: "N/A", // Not Applicable

    // Planning Section
    farmsAndPestsTitle: "My farms",
    addFarmBtn: "Add New Farm",
    addPestBtnTitle: "Add Pest/Disease",
    addTreatmentBtnTitle: "Add Treatment",
    planningPestsHeader: "Pests & Diseases",
    planningTreatmentsHeader: "Treatments",
    planningToBeScheduledHeader: "To Be Scheduled:",
    planningUpcomingHeader: "Upcoming:",
    planningNoUpcomingMsg: "No upcoming or unscheduled treatments linked.",
    planningViewPastBtn: "View Past Treatments",
    planningHidePastBtn: "Hide Past Treatments",
    planningPastTreatmentsTitle: "Past Treatments:",
    planningPastLegendCompleted: "Completed",
    planningPastLegendMissed: "Missed",
    planningNoPastTreatmentsMsg:
      "No past scheduled treatments found for this pest.",
    planningNoPestsMsg: "No pests or diseases recorded for this farm yet.",
    planningNoFarmsMsg: 'No farms added yet. Use "Add New Farm" to start.',
    planningSeverityLegendLabel: "Severity:",
    planningSeverityNone: "None",
    planningSeverityLow: "Low",
    planningSeverityMedium: "Medium",
    planningSeverityHigh: "High",
    planningStatusUnknown: "(Status Unknown)",
    planningStatusToBeScheduled: "(To be scheduled)",
    planningStatusCompleted: "(Completed)",
    planningStatusMissed: "(Missed)",
    planningStatusUpcoming: "(Upcoming)",
    markCompleteBtnTitle: "Mark as Completed",
    unmarkCompleteBtnTitle: "Unmark Completed",
    planningNoTreatmentsLinked: "No treatments linked to this pest yet.",

    // Calendar Section
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun",
    legendMissed: "Missed",
    legendUpcoming: "Upcoming",
    legendCompleted: "Completed",
    calendarDayTitleDefault: "Treatments Scheduled",
    calendarDayTitlePrefix: "Treatments for",
    calendarDayNoTreatments: "No treatments scheduled for this day.",
    month_0: "January",
    month_1: "February",
    month_2: "March",
    month_3: "April",
    month_4: "May",
    month_5: "June",
    month_6: "July",
    month_7: "August",
    month_8: "September",
    month_9: "October",
    month_10: "November",
    month_11: "December",

    // Inventory Section
    inventoryTitle: "Products in Use",
    inventoryEmpty:
      "No products listed yet. Add treatments to populate this list.",
    inventoryTreatmentsSuffix: "Treatments",
    inventoryShowDetailsBtnTitle: "Show/Hide Treatment Details",
    inventoryEditStockBtnTitle: "View Details / Edit Stock",
    inventoryNeededLabel: "Quantity Needed:",
    inventoryCurrentStockLabel: "Current Stock:",
    inventoryStockBalanceLabel: "Stock Balance:",
    inventoryMixedUnitsWarning: "(mixed units)",
    inventoryCalcErrorWarning:
      "Calculation error: Check treatment entries for missing info (e.g., Multiplier Factor/Value). Totals may be inaccurate. Please review treatment details.",
    inventoryInconsistentBaseWarning:
      "Warning: Inconsistent dose units used. Calculations may be inaccurate.",
    inventoryOtherUnitWarning:
      "Quantity cannot be calculated for 'other' unit. Select a defined unit for calculation.",
    inventoryDetailsUpcomingTitle: "Upcoming/Unscheduled Uses",
    inventoryDetailsNoUpcoming:
      "No upcoming, unscheduled, or missed uses found.",
    inventoryViewPastUsesBtn: "View Past Uses",
    inventoryHidePastUsesBtn: "Hide Past Uses",
    inventoryDetailsPastTitle: "Completed Treatments",
    inventoryMissedIndicator: "(Missed)",

    // Report Section
    reportTitle: "Activities Report",
    reportEmpty: 'Click "Update Report" to see farm details.',
    updateReportBtn: "Update Report",
    reportEmptyMsg:
      "No farms added yet. Add farms and treatments to generate a report.",
    reportFarmTitleSuffix: "- Activities Report",
    reportLocationLabel: "Location:",
    reportSizeLabel: "Size (ha):",
    reportCropLabel: "Crop:",
    reportPlantingDateLabel: "Planting Date:",
    reportHarvestDateLabel: "Expected Harvest:",
    reportPestsReportedLabel: "Pests/Diseases reported",
    reportObsLabel: "Obs:",
    reportTreatmentsCompletedLabel: "Treatments Completed",
    reportCompletedHeader:
      "Date | Product | Surface treated | Application rate applied | Total quantity applied",
    reportProductsUsedLabel: "Products used",
    reportProductUsedLine: "used",
    reportCalcErrorNote:
      "Note: Some quantities could not be calculated due to missing info. Totals may be inaccurate.",
    reportNoCompletedTreatments:
      "No completed treatments linked to this specific pest/disease.",
    reportNoneReported: "None reported for this farm.",
    reportFooter1:
      "Report generated through iGrow by AgricAdvisors Mobile App on",

    // Modals - General
    deleteConfirmTitle: "Are you sure?",

    // Modals - Supply Calculator
    supplyCalcTitle: "Application Calculator",
    supplyCalcLegend: "Calculate Quantity",
    supplyCalcSurfaceLabel: "Surface to be treated (ha):",
    supplyCalcSurfacePlaceholder: "e.g. 1.5",
    supplyCalcDoseLabel: "Dose to apply:",
    supplyCalcDosePlaceholder: "From Treatment",
    supplyCalcRateUnitLabel: "Rate Unit:",
    supplyCalcDoseHelp: "Dose is determined by the treatment record.",
    supplyCalcNumAppLabel: "Number of Sprayers/Applicators:",
    supplyCalcNumAppHelp:
      "Used if dose unit is per applicator. E.g., 20 sprayers/ha.",
    supplyCalcPerAppLabel: "Quantity per Sprayer/Applicator:",
    supplyCalcPerAppHelp:
      "Auto-calculated based on dose and number of applicators.",
    supplyCalcTotalQtyLabel: "Total Quantity Needed:",
    supplyCalcTotalQtyHelp:
      "Auto-calculated: Calculated Rate per Ha × Surface Area (ha).",
    supplyCalcSurfaceInfoDefault: "Note: Treating less than the full farm size",
    supplyCalcSurfaceErrorDefault: "Cannot treat more than the farm size",
    supplyCalcErrorSuffix:
      "Edit the Farm record to increase its size if needed.",
    supplyCalcRateError: "N/A (Check Unit/Context)",
    supplyCalcQtyErrorSelectUnit: "Select Unit",
    supplyCalcQtyErrorEnterDose: "Enter Dose",
    supplyCalcQtyErrorEnterSurface: "Enter Surface Area",

    // Modals - Rename Product
    renameProductTitle: "Rename Product",
    renameProductPrompt1:
      "Enter the new name for the product. This will update the product name in ",
    renameProductPrompt2: "ALL",
    renameProductPrompt3: ' treatments currently using "',
    renameProductNewLabel: "New Product Name:",
    renameProductNewPlaceholder: "Enter new name",
    renameProductConfirmBtn: "Rename Product",
    renameProductExistsError:
      'Another product named "{newName}" is already defined or in use. Please choose a different name.',
    renameProductEmptyError: "New product name cannot be empty.",
    renameProductContextError: "An error occurred. Cannot rename product.",

    // Modals - Delete Product Treatments
    deleteProductConfirmTitle: "Delete All Associated Treatments?",
    deleteProductConfirmPrompt1: "Are you sure you want to delete ",
    deleteProductConfirmPrompt2: "ALL",
    deleteProductConfirmPrompt3: ' treatments associated with the product "',
    deleteProductConfirmPrompt4: '"',
    deleteProductConfirmWarning: "This action cannot be undone.",
    deleteProductConfirmBtn: "Yes, Delete Treatments",
    deleteProductContextError: "An error occurred. Cannot delete treatments.",
    deleteProductNoneFoundError:
      'No treatments were found using the product name "{productName}".',

    // Modals - Product Stock
    productStockTitle: "Product Stock Details",
    productStockProductLabel: "Product:",
    productStockUsedInLabel: "Used in:",
    productStockNeededLabel: "Quantity Needed:",
    productStockNeededHelp: "(for Upcoming, Unscheduled and missed treatments)",
    productStockUsedLabel: "Quantity Used:",
    productStockUsedHelp: "(for all the treatments completed)",
    productStockAdjLabel: "Stock Adjustment:",
    productStockAdjPlaceholder: "e.g. 10.5",
    productStockAddTitle: "Add to Total Stock",
    productStockRemoveTitle: "Remove from Total Stock",
    productStockAdjHelp:
      "Enter amount to add or remove from Total Stock below.",
    productStockTotalLabel: "Total Stock (Calculated):",
    productStockTotalHelp:
      "This is the total quantity acquired to date (after adjustments).",
    productStockCurrentLabel: "Current Stock (Calculated):",
    productStockCurrentHelp:
      "Total Stock - Quantity Used (for completed treatments).",
    productStockBalanceLabel: "Stock Balance (Calculated):",
    productStockBalanceHelp:
      "Current Stock - Quantity Needed (for future/missed treatments).",
    stockCalcErrorMsg: "Calculation Error: Check treatment entries.",
    stockTotalNegativeMsg: "Total Stock is negative. Check adjustments.",
    stockTotalLowMsg:
      "Total Stock < Quantity Used. Check stock entries or completed treatments.",
    stockMixedUnitsMsg: "Units are mixed! Calculations may be inaccurate.",
    stockBalanceInsufficientMsg:
      "Insufficient stock for planned treatments! ({shortfall} {unit} short)",
    stockCurrentNeedMoreMsg:
      "You may need more products! Use our search engine to find shops near you.",
    stockBalanceSufficientMsg: "Sufficient stock for all planned treatments.",
    stockAdjustError:
      "Please enter a valid positive amount for the adjustment.",
    stockProductNotFound: 'Product details not found for "{productName}".',

    // Modals - Farm
    farmModalTitleUnified: "Add/Edit a Farm",
    farmNameLabel: "Farm Name:",
    farmNamePlaceholder: "Enter farm name",
    farmLocationLabel: "Farm Location:",
    farmLocationPlaceholder: "Enter farm location",
    farmSizeLabel: "Farm Size (ha):",
    farmSizePlaceholder: "e.g. 25.75",
    farmSizeHelp: "1 ha = 10,000 m² | 0.5 ha = 5,000 m² | 0.25 ha = 2,500 m²",
    cropLabel: "Crop:",
    selectCropPlaceholder: "Select a Crop",
    cropWheat: "Wheat",
    cropCorn: "Corn",
    cropSoybeans: "Soybeans",
    Wheat: "Wheat",
    Corn: "Corn",
    Soybeans: "Soybeans",
    plantingDateLabel: "Planting Date:",
    plantingDateHelp: "Optional. Leave blank if N/A.",
    harvestDateLabel: "Expected Harvest Date:",
    harvestDateHelp: "Optional. Leave blank if N/A.",
    saveFarmBtn: "Save Farm",
    farmValidationError:
      "Please fill in all required farm fields (Name, Location, Size, Crop).",
    farmSizeError:
      "Invalid Farm Size (ha). Please enter a valid non-negative number.",
    farmDateOrderError:
      "The Expected Harvest Date cannot be scheduled before the Planting Date. Please update the dates.",
    farmDateParseError:
      "Could not validate farm dates. Please check the format.",
    farmEditError: "Error: Could not find the farm to update.",
    farmDuplicateError:
      "A farm with the same Name, Size (ha), and Crop already exists.",

    // Modals - Pest/Disease
    pestModalTitleUnified: "Add/Edit a Pest/Disease",
    associateFarmLabel: "Associate with Farm:",
    selectFarmPlaceholder: "Select a Farm",
    associateFarmHelp: "Pests/Diseases must be associated with a farm.",
    associatedCropLabel: "Associated Crop:",
    cropFromFarmPlaceholder: "Crop from selected farm",
    associatedCropHelp:
      "Crop is automatically determined by the selected farm.",
    pestTypeLabel: "Pest/Disease Type:",
    pestTypeDisease: "Disease",
    pestTypeInsect: "Insect",
    pestTypeNematodes: "Nematodes",
    pestTypeWeeds: "Weeds",
    pestTypeOther: "Other",
    pestTypeUnknown: "I don't know",
    diagnoseHelp:
      "Consider using the 'Diagnose' module to help identify the pest or disease.",
    pestNameLabel: "Pest/Disease Name:",
    selectPestPlaceholder: "Select Pest/Disease...",
    notOnListLabel: "Not on list?",
    customPestPlaceholder: "Enter custom pest or disease name",
    severityLabel: "Severity:",
    severityNone: "None",
    severityLow: "Low",
    severityMedium: "Medium",
    severityHigh: "High",
    actionLabel: "Action:",
    actionMonitor: "Monitor",
    actionPrevent: "Prevent",
    actionRemove: "Remove",
    actionTreat: "Treat",
    actionNone: "None",
    observationsLabel: "Observations:",
    observationsPlaceholder: "Enter your observations",
    savePestBtn: "Save Pest/Disease",
    pestCustomNameError: "Please enter the custom Pest/Disease Name.",
    pestSelectNameError: "Please select a Pest/Disease Name from the list.",
    pestFarmRequiredError: "A valid associated Farm is required.",
    pestEditSaveError: "Error saving changes. Original pest record not found.",
    cropNotDefinedOnFarm: "Farm has no crop specified",
    cropFarmError: "Error finding farm data",

    // Modals - Treatment
    treatmentModalTitleUnifiedBase: "Add/Edit a Treatment",
    treatmentModalTitlePestPrefix: "for",
    treatmentModalAssociatedFarmLabel: "Associated Farm",
    associatedPestLabel: "Associated Pest/Disease:",
    associatedPestNone: "None (General Farm Treatment)",
    treatmentPestLinkInfo:
      "This treatment is linked to the specific pest/disease shown above.",
    productSelectionTitle: "Product Selection & Dose",
    productNameLabel: "Product Name:",
    selectProductPlaceholder: "Select Product...",
    productSearchHelp:
      "If you don't know what product to use, consider using the product search module.",
    treatmentProductWarning:
      'Please select a Product Name OR check "None of the products listed".',
    noneProductListedLabel: "None of the products listed",
    noneProductWarn1: "Product-specific fields will be disabled.",
    noneProductWarn2:
      "If you use other products, please only use those that are legally permitted.",
    productDetailsTitle: "Product details",
    productDetailsRateLabel: "Application Rates:",
    productDetailsTimeLabel: "Treatment Time:",
    productDetailsFreqLabel: "Frequency of Application:",
    productDetailsMoreLink: "More details...",
    doseToApplyLabel: "Dose to apply:",
    dosePlaceholder: "e.g. 15.5",
    doseHelp: "Enter the application rate. Enabled when a product is selected.",
    treatmentDoseWarning:
      "Please enter the Dose to apply when a product is selected.",
    treatmentUnitWarning: "Please select a Unit for the Dose.",
    multiplierFactorLabel: "Multiplier Factor:",
    selectFactorPlaceholder: "Select factor type...",
    factorAppHa: "Nber of applicators/ha",
    factorPlantHa: "Nber of plants/ha",
    factorWeight: "Total weight/ha (e.g., of seeds, in kg)",
    factorVolume: "Total volume/ha (e.g., of spray mix, in L)",
    factorUnits: "Nber of units/ha",
    factorValuePlaceholder: "Enter value...",
    factorValuePlaceholderApp: "e.g. 20",
    factorValuePlaceholderPlant: "e.g. 10000",
    factorValuePlaceholderWeight: "e.g. 5000.0",
    factorValuePlaceholderVol: "e.g. 1000.0",
    factorValuePlaceholderUnits: "e.g. 5",
    multiplierFactorHelp:
      "Specify factor if Dose Unit is not per Ha. Enabled when applicable.",
    multiplierFactorDisabled:
      "Multiplier factor disabled: Dose unit is per Ha.",
    treatmentMultiplierTypeWarning: "Please select a Multiplier Factor type.",
    treatmentMultiplierValueWarning: "Please enter a valid Multiplier Value.",
    treatmentMultiplierValueWarningNonNeg:
      "Please enter a valid, non-negative Multiplier Value.",
    totalSurfaceLabel: "Total Surface to Treat (ha):",
    totalSurfacePlaceholder: "e.g. 1.25",
    totalSurfaceHelp1:
      "Defaults to farm size. Enabled when a product is selected. Max:",
    quantityPerHaLabel: "Quantity per ha (autocalculated):",
    formulaQtyPerHa: "Formula: Dose × (Multiplier Value if unit not /ha)",
    treatmentMultiplierGeneralWarning:
      "Please select the correct Multiplier Factor & enter its Value.",
    totalQuantityNeededLabel: "Total Quantity Needed (autocalculated):",
    formulaTotalQty: "Formula: Quantity per ha × Total Surface to Treat (ha)",
    scheduleSectionTitle: "Schedule & Details",
    applicationDateLabel: "Application Date:",
    treatmentDateWarning:
      'Please select an Application Date OR check "Schedule later".',
    scheduleLaterLabel: "Schedule later",
    applicationTimeLabel: "Application Time:",
    treatmentTimeHelp: "Time can be set when a date is selected.",
    treatmentTimeWarning:
      "Please select a valid Application Time when a date is specified.",
    treatmentTimeWarningInvalid12h: "Invalid 12h time selection.",
    treatmentTimeWarningInvalid24h: "Invalid 24h time selection.",
    notesLabel: "Notes:",
    notesPlaceholder: "Any additional notes...",
    saveAndNextBtn: "Save & Next",
    treatmentSaveFarmMissingError:
      "Cannot save treatment: Associated farm is missing.",
    treatmentSaveSurfaceError:
      "Please enter a valid, non-negative number for the Total Surface (ha).",
    treatmentSaveSurfaceMaxError:
      "Total Surface to Treat ({surfaceValue} ha) cannot be greater than the farm size ({farmSize} ha).",
    treatmentFarmNotFoundError:
      "The farm associated with this treatment no longer exists. Cannot edit.",
    treatmentNotFoundError: "Could not load treatment for editing.",
    treatmentAddDirectError:
      "Please add treatments via the 'Add Treatment' (+) button on a specific Farm or Pest/Disease in the Planning section.",
    treatmentContextPestNotFoundError: "Pest not found. Cannot add treatment.",
    treatmentContextFarmNotFoundError:
      "Associated farm not found for this pest.",
    treatmentContextFarmGoneError:
      "Farm associated with this pest no longer exists.",
    treatmentMultiplierFactorValueWarning: "Need Factor, Value & Surface",
    treatmentMultiplierFactorValueError: "Calculation error occurred.",

    // Modals - Confirmation / Warning
    notificationTitle: "Application Reminder!",
    notificationBody:
      "It's time for application of {productName} in {farmName}!",
    notificationFooter: "Please follow the direction of use!",
    deleteTreatmentConfirmTitle:
      "Are you sure you want to delete this treatment?",
    deleteTreatmentConfirmTitleWithName:
      'Delete treatment "{productName}" ({date})?',
    deleteFarmConfirmTitle:
      "Are you sure you want to delete this farm (and all its associated pests/treatments)?",
    deleteFarmConfirmTitleWithName:
      'Delete farm "{farmName}"? (and all associated pests/treatments)',
    deletePestConfirmTitle:
      "Are you sure you want to delete this Pest/Disease (and its associated treatments)?",
    deletePestConfirmTitleWithName:
      'Delete Pest/Disease "{pestName}"? (and associated treatments)',
    confirmTimestampTitle: "Confirm Completion Time",
    confirmTimestampPromptDefault:
      "Do you want to update the completion date and time to now?",
    confirmTimestampPromptPast:
      "This treatment was scheduled for {date} {time}. Mark as completed and update time to now?",
    confirmTimestampYesDefault: "Yes, Update Time",
    confirmTimestampYesPast: "Yes, Update Time to Now",
    confirmTimestampNoDefault: "No, Keep Original",
    confirmTimestampNoCancel: "Cancel",
    confirmTimestampEarlyTitle: "Confirm Early Completion",
    confirmTimestampEarlyPrompt:
      "Mark this upcoming/current treatment as completed now?",
    confirmTimestampEarlyYes: "Yes, Mark Completed Now",
    pastDateWarningTitle: "Past Date/Time Warning",
    pastDateWarningMsg1: "The selected date/time are in the past.",
    pastDateWarningMsg2:
      "Are you sure you want to schedule this treatment for a past date/time?",
    invalidDatesTitle: "Invalid Dates",
    invalidDatesMsg:
      "The Expected Harvest Date cannot be scheduled before the Planting Date. Please update the dates.",
    duplicateFarmTitle: "Duplicate Farm",
    duplicateFarmMsg:
      "A farm with the same Name, Size (ha), and Crop already exists. Please modify the details or use the existing farm.",
    treatmentCompleteUnscheduledError:
      "This treatment cannot be marked as completed until it has been scheduled with a date and time.",
    treatmentNotFound: "Treatment not found.",

    // Modals - Details
    treatmentDetailsTitle: "Treatment Details",
    treatmentDetailsFarmLabel: "Farm:",
    treatmentDetailsCropLabel: "Crop:",
    treatmentDetailsPestLabel: "Pest/Disease:",
    treatmentDetailsPestNone: "None (General Farm Treatment)",
    treatmentDetailsPestUnknown: "Unknown Linked Pest",
    treatmentDetailsProductLabel: "Product:",
    treatmentDetailsProductNone: "Other (Not Listed)",
    treatmentDetailsRecRateLabel: "Product Rec. Rate:",
    treatmentDetailsDoseAppliedLabel: "Dose Applied:",
    treatmentDetailsDoseNone: "N/A (No Product)",
    treatmentDetailsMultiplierFactorLabel: "Multiplier Factor:",
    treatmentDetailsMultiplierValueLabel: "Multiplier Value:",
    treatmentDetailsSurfaceLabel: "Total Surface Treated:",
    treatmentDetailsQtyPerHaLabel: "Calculated Quantity per ha:",
    treatmentDetailsTotalQtyLabel: "Calculated Total Quantity:",
    treatmentDetailsDateTimeLabel: "Date/Time:",
    treatmentDetailsDateTimeUnscheduled: "To be scheduled",
    treatmentDetailsStatusLabel: "Status:",
    treatmentDetailsNotesLabel: "Notes:",
    treatmentDetailsCalcWarning:
      "Warning: Please choose the right corresponding multiplier factor and value in the treatment entry.",
    farmDetailsTitle: "Farm Details",
    farmDetailsNameLabel: "Name:",
    farmDetailsLocationLabel: "Location:",
    farmDetailsSizeLabel: "Size (ha):",
    farmDetailsCropLabel: "Crop:",
    farmDetailsPlantingLabel: "Planting Date:",
    farmDetailsHarvestLabel: "Expected Harvest:",
    pestDetailsTitle: "Pest/Disease Details",
    pestDetailsNameLabel: "Name:",
    pestDetailsTypeLabel: "Type:",
    pestDetailsSeverityLabel: "Severity:",
    pestDetailsActionLabel: "Action:",
    pestDetailsFarmLabel: "Farm:",
    pestDetailsCropLabel: "Crop:",
    pestDetailsObsLabel: "Observations:"
  },
  fr: {
    // General & UI
    appTitle: "Gestion des Maladies et Ravageurs",
    pageTitlePlanning: "Planification de la production des cultures",
    pageTitleCalendar: "Gestion des Maladies et Ravageurs",
    pageTitleInventory: "Inventaire des produits",
    pageTitleReport: "Rapport de protection des cultures",
    languageLabel: "Langue:",
    planningDropdownBtn: "Planification",
    calendarDropdownBtn: "Calendrier",
    inventoryDropdownBtn: "Inventaire",
    reportDropdownBtn: "Rapport",
    closeBtn: "Fermer",
    cancelBtn: "Annuler",
    saveBtn: "Enregistrer",
    yesDeleteBtn: "Oui, Supprimer",
    okBtn: "OK",
    addBtn: "Ajouter",
    removeBtn: "Retirer",
    detailsBtnTitle: "Détails",
    editBtnTitle: "Modifier",
    deleteBtnTitle: "Supprimer",
    units: "unités",
    otherUnit: "autre",
    selectUnitPlaceholder: "Choisir unité...",
    yesContinueBtn: "Oui, Continuer",
    noGoBackBtn: "Non, Retourner Modifier",
    hourAbbr: "HH",
    minuteAbbr: "MM",
    na: "N/A",

    // Planning Section
    farmsAndPestsTitle: "Mes champs",
    addFarmBtn: "Ajouter un Champ",
    addPestBtnTitle: "Ajouter une Maladie/Ravageur",
    addTreatmentBtnTitle: "Ajouter Traitement",
    planningPestsHeader: "Maladies & Ravageurs",
    planningTreatmentsHeader: "Traitements",
    planningToBeScheduledHeader: "À Planifier:",
    planningUpcomingHeader: "À venir:",
    planningNoUpcomingMsg: "Aucun traitement à venir ou non planifié.",
    planningViewPastBtn: "Voir Traitements Passés",
    planningHidePastBtn: "Masquer Traitements Passés",
    planningPastTreatmentsTitle: "Traitements Passés:",
    planningPastLegendCompleted: "Terminé",
    planningPastLegendMissed: "Manqué",
    planningNoPastTreatmentsMsg:
      "Aucun traitement passé planifié trouvé pour cette maladie/ravageur.",
    planningNoPestsMsg: "Aucune maladie ou ravageur enregistré pour ce champ.",
    planningNoFarmsMsg:
      'Aucun champ ajouté. Utilisez "Ajouter un Champ" pour commencer.',
    planningSeverityLegendLabel: "Sévérité:",
    planningSeverityNone: "Aucune",
    planningSeverityLow: "Faible",
    planningSeverityMedium: "Moyenne",
    planningSeverityHigh: "Élevée",
    planningStatusUnknown: "(Statut Inconnu)",
    planningStatusToBeScheduled: "(À planifier)",
    planningStatusCompleted: "(Terminé)",
    planningStatusMissed: "(Manqué)",
    planningStatusUpcoming: "(À venir)",
    markCompleteBtnTitle: "Marquer comme Terminé",
    unmarkCompleteBtnTitle: "Décocher terminé",
    planningNoTreatmentsLinked:
      "Aucun traitement lié à cette maladie/ravageur pour le moment.",

    // Calendar Section
    mon: "Lun",
    tue: "Mar",
    wed: "Mer",
    thu: "Jeu",
    fri: "Ven",
    sat: "Sam",
    sun: "Dim",
    legendMissed: "Manqué",
    legendUpcoming: "À venir",
    legendCompleted: "Terminé",
    calendarDayTitleDefault: "Traitements Planifiés",
    calendarDayTitlePrefix: "Traitements pour le",
    calendarDayNoTreatments: "Aucun traitement planifié pour ce jour.",
    month_0: "Janvier",
    month_1: "Février",
    month_2: "Mars",
    month_3: "Avril",
    month_4: "Mai",
    month_5: "Juin",
    month_6: "Juillet",
    month_7: "Août",
    month_8: "Septembre",
    month_9: "Octobre",
    month_10: "Novembre",
    month_11: "Décembre",

    // Inventory Section
    inventoryTitle: "Produits Utilisés",
    inventoryEmpty:
      "Aucun produit n'est encore répertorié. Ajoutez des traitements pour renseigner cette liste.",
    inventoryTreatmentsSuffix: "Traitements",
    inventoryShowDetailsBtnTitle: "Afficher/Masquer Détails Traitement",
    inventoryEditStockBtnTitle: "Voir Détails / Modifier Stock",
    inventoryNeededLabel: "Quantité Requise:",
    inventoryCurrentStockLabel: "Stock Actuel:",
    inventoryStockBalanceLabel: "Solde de Stock:",
    inventoryMixedUnitsWarning: "(unités mixtes)",
    inventoryCalcErrorWarning:
      "Erreur de calcul: Vérifiez les entrées de traitement pour infos manquantes (ex: Facteur/Valeur Multiplicateur). Totaux peuvent être inexacts. Veuillez revoir les détails du traitement.",
    inventoryInconsistentBaseWarning:
      "Avertissement: Unités de dose incohérentes utilisées. Calculs peuvent être inexacts.",
    inventoryOtherUnitWarning:
      "La quantité ne peut pas être calculée pour l'unité 'autre'. Sélectionnez une unité définie pour le calcul.",
    inventoryDetailsUpcomingTitle: "Utilisations à venir/Non planifiées",
    inventoryDetailsNoUpcoming:
      "Aucune utilisation à venir, non planifiée ou manquée trouvée.",
    inventoryViewPastUsesBtn: "Voir Utilisations Passées",
    inventoryHidePastUsesBtn: "Masquer Utilisations Passées",
    inventoryDetailsPastTitle: "Traitements Terminés",
    inventoryMissedIndicator: "(Manqué)",

    // Report Section
    reportTitle: "Rapport d'activités",
    reportEmpty:
      'Cliquez sur "Mettre à Jour Rapport" pour voir les détails du champ.',
    updateReportBtn: "Mettre à Jour Rapport",
    reportEmptyMsg:
      "Aucun champ ajouté. Ajoutez champs et traitements pour générer un rapport.",
    reportFarmTitleSuffix: "- Rapport d'activités",
    reportLocationLabel: "Localisation:",
    reportSizeLabel: "Taille (ha):",
    reportCropLabel: "Culture:",
    reportPlantingDateLabel: "Date de Semis:",
    reportHarvestDateLabel: "Récolte Prévue:",
    reportPestsReportedLabel: "Maladies/Ravageurs signalés",
    reportObsLabel: "Obs:",
    reportTreatmentsCompletedLabel: "Traitements Terminés",
    reportCompletedHeader:
      "Date | Produit | Surface traitée | Dose appliquée | Quantité totale appliquée",
    reportProductsUsedLabel: "Produits utilisés",
    reportProductUsedLine: "utilisé(s)",
    reportCalcErrorNote:
      "Note: Certaines quantités n'ont pu être calculées (infos manquantes). Les totaux peuvent être inexacts.",
    reportNoCompletedTreatments:
      "Aucun traitement terminé lié à cette maladie/ravageur spécifique.",
    reportNoneReported: "Aucun signalé pour ce champ.",
    reportFooter1: "Rapport généré via iGrow par AgricAdvisors Mobile App le",

    // Modals - General
    deleteConfirmTitle: "Êtes-vous sûr?",

    // Modals - Supply Calculator
    supplyCalcTitle: "Calculateur d'Application",
    supplyCalcLegend: "Calculer Quantité",
    supplyCalcSurfaceLabel: "Surface à traiter (ha):",
    supplyCalcSurfacePlaceholder: "ex: 1,5",
    supplyCalcDoseLabel: "Dose à appliquer:",
    supplyCalcDosePlaceholder: "Depuis Traitement",
    supplyCalcRateUnitLabel: "Unité de Dose:",
    supplyCalcDoseHelp:
      "La dose est déterminée par l'enregistrement du traitement.",
    supplyCalcNumAppLabel: "Nombre de Pulvérisateurs/Applicateurs:",
    supplyCalcNumAppHelp:
      "Utilisé si l'unité de dose est par applicateur. Ex: 20 pulvérisateurs/ha.",
    supplyCalcPerAppLabel: "Quantité par Pulvérisateur/Applicateur:",
    supplyCalcPerAppHelp:
      "Auto-calculé basé sur dose et nombre d'applicateurs.",
    supplyCalcTotalQtyLabel: "Quantité Totale Requise:",
    supplyCalcTotalQtyHelp:
      "Auto-calculé: Dose Calculée par Ha × Surface (ha).",
    supplyCalcSurfaceInfoDefault:
      "Note: Traitement inférieur à la taille totale du champ",
    supplyCalcSurfaceErrorDefault:
      "Ne peut traiter plus que la taille du champ",
    supplyCalcErrorSuffix:
      "Modifiez la fiche Champ pour augmenter sa taille si besoin.",
    supplyCalcRateError: "N/A (Vérifier Unité/Contexte)",
    supplyCalcQtyErrorSelectUnit: "Choisir Unité",
    supplyCalcQtyErrorEnterDose: "Entrer Dose",
    supplyCalcQtyErrorEnterSurface: "Entrer Surface",

    // Modals - Rename Product
    renameProductTitle: "Renommer Produit",
    renameProductPrompt1:
      "Entrez le nouveau nom pour le produit. Cela mettra à jour le nom du produit dans ",
    renameProductPrompt2: "TOUS",
    renameProductPrompt3: ' les traitements utilisant actuellement "',
    renameProductNewLabel: "Nouveau Nom Produit:",
    renameProductNewPlaceholder: "Entrez nouveau nom",
    renameProductConfirmBtn: "Renommer Produit",
    renameProductExistsError:
      'Un autre produit nommé "{newName}" existe déjà. Choisissez un nom différent.',
    renameProductEmptyError: "Le nouveau nom du produit ne peut être vide.",
    renameProductContextError:
      "Une erreur est survenue. Impossible de renommer le produit.",

    // Modals - Delete Product Treatments
    deleteProductConfirmTitle: "Supprimer Tous les Traitements Associés?",
    deleteProductConfirmPrompt1: "Êtes-vous sûr de vouloir supprimer ",
    deleteProductConfirmPrompt2: "TOUS les {count}",
    deleteProductConfirmPrompt3: ' traitements associés au produit "',
    deleteProductConfirmPrompt4: '"',
    deleteProductConfirmWarning: "Cette action est irréversible.",
    deleteProductConfirmBtn: "Oui, Supprimer Traitements",
    deleteProductContextError:
      "Une erreur est survenue. Impossible de supprimer les traitements.",
    deleteProductNoneFoundError:
      'Aucun traitement trouvé utilisant le nom de produit "{productName}".',

    // Modals - Product Stock
    productStockTitle: "Détails Stock Produit",
    productStockProductLabel: "Produit:",
    productStockUsedInLabel: "Utilisé dans:",
    productStockNeededLabel: "Quantité Requise:",
    productStockNeededHelp:
      "(pour traitements À venir, Non planifiés et Manqués)",
    productStockUsedLabel: "Quantité Utilisée:",
    productStockUsedHelp: "(pour tous les traitements terminés)",
    productStockAdjLabel: "Ajustement Stock:",
    productStockAdjPlaceholder: "ex: 10,5",
    productStockAddTitle: "Ajouter au Stock Total",
    productStockRemoveTitle: "Retirer du Stock Total",
    productStockAdjHelp:
      "Entrez montant à ajouter ou retirer du Stock Total ci-dessous.",
    productStockTotalLabel: "Stock Total (Calculé):",
    productStockTotalHelp:
      "Quantité totale acquise à ce jour (après ajustements).",
    productStockCurrentLabel: "Stock Actuel (Calculé):",
    productStockCurrentHelp:
      "Stock Total - Quantité Utilisée (traitements terminés).",
    productStockBalanceLabel: "Solde de Stock (Calculé):",
    productStockBalanceHelp:
      "Stock Actuel - Quantité Requise (traitements futurs/manqués).",
    stockCalcErrorMsg: "Erreur Calcul: Vérifiez les traitements.",
    stockTotalNegativeMsg: "Stock Total négatif. Vérifiez ajustements.",
    stockTotalLowMsg:
      "Stock Total < Quantité Utilisée. Vérifiez entrées stock ou traitements terminés.",
    stockMixedUnitsMsg: "Unités mixtes! Calculs peuvent être inexacts.",
    stockBalanceInsufficientMsg:
      "Stock insuffisant pour traitements planifiés! ({shortfall} {unit} manquant(es))",
    stockCurrentNeedMoreMsg:
      "Vous pourriez avoir besoin de plus de produits! Utilisez notre moteur de recherche pour trouver des magasins près de chez vous.",
    stockBalanceSufficientMsg:
      "Stock suffisant pour tous les traitements planifiés.",
    stockAdjustError:
      "Veuillez entrer un montant positif valide pour l'ajustement.",
    stockProductNotFound: 'Détails produit non trouvés pour "{productName}".',

    // Modals - Farm
    farmModalTitleUnified: "Ajouter/Modifier un Champ",
    farmNameLabel: "Nom du Champ:",
    farmNamePlaceholder: "Entrez nom champ",
    farmLocationLabel: "Localisation du Champ:",
    farmLocationPlaceholder: "Entrez localisation champ",
    farmSizeLabel: "Taille du Champ (ha):",
    farmSizePlaceholder: "ex: 25,75",
    farmSizeHelp: "1 ha = 10 000 m² | 0,5 ha = 5 000 m² | 0,25 ha = 2 500 m²",
    cropLabel: "Culture:",
    selectCropPlaceholder: "Choisir la culture",
    cropWheat: "Blé",
    cropCorn: "Maïs",
    cropSoybeans: "Soja",
    Wheat: "Blé",
    Corn: "Maïs",
    Soybeans: "Soja",
    plantingDateLabel: "Date de Semis:",
    plantingDateHelp: "Optionnel. Laisser vide si N/A.",
    harvestDateLabel: "Récolte Prévue:",
    harvestDateHelp: "Optionnel. Laisser vide si N/A.",
    saveFarmBtn: "Enregistrer le Champ",
    farmValidationError:
      "Veuillez remplir tous les champs requis (Nom, Localisation, Taille, Culture).",
    farmSizeError: "Taille Champ (ha) invalide. Entrez un nombre positif.",
    farmDateOrderError:
      "Récolte Prévue avant Date de Semis. Mettez à jour les dates.",
    farmDateParseError: "Impossible de valider les dates. Vérifiez le format.",
    farmEditError: "Erreur: Champ à modifier introuvable.",
    farmDuplicateError:
      "Champ avec même Nom, Taille (ha) et Culture existe déjà.",

    // Modals - Pest/Disease
    pestModalTitleUnified: "Ajouter/Modifier une Maladie/Ravageur",
    associateFarmLabel: "Champ Associé:",
    selectFarmPlaceholder: "Choisir Champ",
    associateFarmHelp: "Maladies/Ravageurs doivent être associés à un champ.",
    associatedCropLabel: "Culture Associée:",
    cropFromFarmPlaceholder: "Culture du champ sélectionné",
    associatedCropHelp:
      "Culture déterminée automatiquement par le champ choisi.",
    pestTypeLabel: "Type de Maladie/Ravageur:",
    pestTypeDisease: "Maladie",
    pestTypeInsect: "Insecte",
    pestTypeNematodes: "Nématodes",
    pestTypeWeeds: "Mauvaises herbes",
    pestTypeOther: "Autre",
    pestTypeUnknown: "Je ne sais pas",
    diagnoseHelp:
      "Utilisez le module 'Diagnostiquer' pour aider à identifier la maladie ou le ravageur.",
    pestNameLabel: "Nom de la Maladie/Ravageur:",
    selectPestPlaceholder: "Sélectionnez Maladie/Ravageur...",
    notOnListLabel: "Pas dans la liste ?",
    customPestPlaceholder: "Entrez nom personnalisé maladie ou ravageur",
    severityLabel: "Sévérité:",
    severityNone: "Aucune",
    severityLow: "Faible",
    severityMedium: "Moyenne",
    severityHigh: "Élevée",
    actionLabel: "Action:",
    actionMonitor: "Surveiller",
    actionPrevent: "Prévenir",
    actionRemove: "Enlever",
    actionTreat: "Traiter",
    actionNone: "Aucune",
    observationsLabel: "Observations:",
    observationsPlaceholder: "Entrez vos observations",
    savePestBtn: "Enregistrer Maladie/Ravageur",
    pestCustomNameError:
      "Veuillez entrer le nom personnalisé de la Maladie/Ravageur.",
    pestSelectNameError:
      "Veuillez choisir un nom de Maladie/Ravageur dans la liste.",
    pestFarmRequiredError: "Un Champ associé valide est requis.",
    pestEditSaveError:
      "Erreur sauvegarde. Enregistrement maladie/ravageur original introuvable.",
    cropNotDefinedOnFarm: "Aucune culture spécifiée pour le champ",
    cropFarmError: "Erreur recherche données champ",

    // Modals - Treatment
    treatmentModalTitleUnifiedBase: "Ajouter/Modifier un Traitement",
    treatmentModalTitlePestPrefix: "pour",
    treatmentModalAssociatedFarmLabel: "Champ Associé",
    associatedPestLabel: "Maladie/Ravageur Associé(e):",
    associatedPestNone: "Aucun (Traitement Champ Général)",
    treatmentPestLinkInfo:
      "Ce traitement est lié à la maladie/ravageur spécifique ci-dessus.",
    productSelectionTitle: "Sélection Produit & Dose",
    productNameLabel: "Nom du Produit:",
    selectProductPlaceholder: "Sélectionnez un produit...",
    productSearchHelp:
      "Si vous ne savez pas quel produit utiliser, considérez utiliser le module de recherche produit.",
    treatmentProductWarning:
      'Veuillez choisir un Nom Produit OU cocher "Aucun des produits listés".',
    noneProductListedLabel: "Aucun des produits listés",
    noneProductWarn1: "Champs spécifiques au produit seront désactivés.",
    noneProductWarn2:
      "Si vous utilisez d'autres produits, utilisez uniquement ceux légalement autorisés.",
    productDetailsTitle: "Détails produit",
    productDetailsRateLabel: "Doses d'application:",
    productDetailsTimeLabel: "Période d'application:",
    productDetailsFreqLabel: "Fréquence d'application:",
    productDetailsMoreLink: "Plus de détails...",
    doseToApplyLabel: "Dose à appliquer:",
    dosePlaceholder: "ex: 15,5",
    doseHelp: "Entrez la dose d'application. Activé si produit choisi.",
    treatmentDoseWarning:
      "Veuillez entrer la Dose à appliquer si produit choisi.",
    treatmentUnitWarning: "Veuillez choisir une Unité pour la Dose.",
    multiplierFactorLabel: "Facteur Multiplicateur:",
    selectFactorPlaceholder: "Choisir type de facteur...",
    factorAppHa: "Nbre d'applicateurs/ha",
    factorPlantHa: "Nbre de plants/ha",
    factorWeight: "Poids Total/ha (ex: semences, en kg)",
    factorVolume: "Volume Total/ha (ex: bouillie, en L)",
    factorUnits: "Nbre d'unités/ha",
    factorValuePlaceholder: "Entrer valeur...",
    factorValuePlaceholderApp: "ex: 20",
    factorValuePlaceholderPlant: "ex: 10000",
    factorValuePlaceholderWeight: "ex: 5000,0",
    factorValuePlaceholderVol: "ex: 1000,0",
    factorValuePlaceholderUnits: "ex: 5",
    multiplierFactorHelp:
      "Spécifiez facteur si Unité Dose n'est pas par Ha. Activé si applicable.",
    multiplierFactorDisabled:
      "Facteur multiplicateur désactivé: Unité dose est par Ha.",
    treatmentMultiplierTypeWarning:
      "Veuillez choisir un type de Facteur Multiplicateur.",
    treatmentMultiplierValueWarning:
      "Veuillez entrer une Valeur Multiplicateur valide.",
    treatmentMultiplierValueWarningNonNeg:
      "Entrez une Valeur Multiplicateur valide et non-négative.",
    totalSurfaceLabel: "Surface Totale à Traiter (ha):",
    totalSurfacePlaceholder: "ex: 1,25",
    totalSurfaceHelp1: "Défaut=taille champ. Activé si produit choisi. Max:",
    quantityPerHaLabel: "Quantité par ha (autocalc.):",
    formulaQtyPerHa:
      "Formule : Dose × (Valeur Multiplicateur si unité pas /ha)",
    treatmentMultiplierGeneralWarning:
      "Veuillez choisir le bon Facteur Multiplicateur & entrer sa Valeur.",
    totalQuantityNeededLabel: "Quantité Totale Requise (autocalc.):",
    formulaTotalQty:
      "Formule : Quantité par ha × Surface Totale à Traiter (ha)",
    scheduleSectionTitle: "Planification & Détails",
    applicationDateLabel: "Date Application:",
    treatmentDateWarning:
      'Veuillez choisir une Date Application OU cocher "Planifier plus tard".',
    scheduleLaterLabel: "Planifier plus tard",
    applicationTimeLabel: "Heure Application:",
    treatmentTimeHelp: "Heure peut être choisie si date sélectionnée.",
    treatmentTimeWarning:
      "Veuillez choisir une Heure Application valide si date spécifiée.",
    treatmentTimeWarningInvalid12h: "Sélection heure 12h invalide.",
    treatmentTimeWarningInvalid24h: "Sélection heure 24h invalide.",
    notesLabel: "Notes:",
    notesPlaceholder: "Notes additionnelles...",
    saveAndNextBtn: "Enreg. & Suivant",
    treatmentSaveFarmMissingError:
      "Sauvegarde impossible: Champ associé manquant.",
    treatmentSaveSurfaceError:
      "Entrez un nombre valide et non-négatif pour Surface Totale (ha).",
    treatmentSaveSurfaceMaxError:
      "Surface à Traiter ({surfaceValue} ha) > Taille champ ({farmSize} ha).",
    treatmentFarmNotFoundError:
      "Champ associé à ce traitement n'existe plus. Modification impossible.",
    treatmentNotFoundError:
      "Impossible de charger traitement pour modification.",
    treatmentAddDirectError:
      "Ajoutez traitements via bouton '+' sur Champ ou Maladie/Ravageur spécifique dans Planification.",
    treatmentContextPestNotFoundError:
      "Maladie/Ravageur introuvable. Impossible d'ajouter traitement.",
    treatmentContextFarmNotFoundError:
      "Champ associé à cette maladie/ravageur introuvable.",
    treatmentContextFarmGoneError:
      "Champ associé à cette maladie/ravageur n'existe plus.",
    treatmentMultiplierFactorValueWarning: "Besoin Facteur, Valeur & Surface",
    treatmentMultiplierFactorValueError: "Erreur de calcul.",

    // Modals - Confirmation / Warning
    notificationTitle: "Rappel d'Application!",
    notificationBody:
      "C'est l'heure de l'application de {productName} à {farmName}!",
    notificationFooter: "Veuillez suivre les instructions d'utilisation!",
    deleteTreatmentConfirmTitle: "Supprimer ce traitement?",
    deleteTreatmentConfirmTitleWithName:
      'Supprimer traitement "{productName}" ({date})?',
    deleteFarmConfirmTitle:
      "Supprimer ce champ (et maladies/ravageurs/traitements associés)?",
    deleteFarmConfirmTitleWithName:
      'Supprimer champ "{farmName}"? (et maladies/ravageurs/traitements associés)',
    deletePestConfirmTitle:
      "Supprimer cette Maladie/Ravageur (et traitements associés)?",
    deletePestConfirmTitleWithName:
      'Supprimer Maladie/Ravageur "{pestName}"? (et traitements associés)',
    confirmTimestampTitle: "Confirmer Heure Fin",
    confirmTimestampPromptDefault:
      "Mettre à jour date et heure de fin à maintenant?",
    confirmTimestampPromptPast:
      "Ce traitement était prévu le {date} {time}. Marquer comme terminé et mettre à jour l'heure à maintenant?",
    confirmTimestampYesDefault: "Oui, Mettre à Jour",
    confirmTimestampYesPast: "Oui, Mettre à Jour à Maintenant",
    confirmTimestampNoDefault: "Non, Garder Original",
    confirmTimestampNoCancel: "Annuler",
    confirmTimestampEarlyTitle: "Confirmer Fin Anticipée",
    confirmTimestampEarlyPrompt:
      "Marquer ce traitement à venir/actuel comme terminé maintenant?",
    confirmTimestampEarlyYes: "Oui, Marquer Terminé Maintenant",
    pastDateWarningTitle: "Avertissement Date/Heure Passée",
    pastDateWarningMsg1: "Date/heure sélectionnées sont passées.",
    pastDateWarningMsg2: "Planifier ce traitement pour une date/heure passée?",
    invalidDatesTitle: "Dates Invalides",
    invalidDatesMsg:
      "Récolte Prévue avant Date de Semis. Mettez à jour les dates.",
    duplicateFarmTitle: "Champ Dupliqué",
    duplicateFarmMsg:
      "Champ avec même Nom, Taille (ha), et Culture existe. Modifiez détails ou utilisez champ existant.",
    treatmentCompleteUnscheduledError:
      "Ce traitement ne peut être marqué terminé avant d'être planifié avec date et heure.",
    treatmentNotFound: "Traitement introuvable.",

    // Modals - Details
    treatmentDetailsTitle: "Détails du traitement",
    treatmentDetailsFarmLabel: "Champ:",
    treatmentDetailsCropLabel: "Culture:",
    treatmentDetailsPestLabel: "Maladie/Ravageur:",
    treatmentDetailsPestNone: "Aucun (Traitement Champ Général)",
    treatmentDetailsPestUnknown: "Maladie/Ravageur Lié(e) Inconnu(e)",
    treatmentDetailsProductLabel: "Produit:",
    treatmentDetailsProductNone: "Autre (Non Listé)",
    treatmentDetailsRecRateLabel: "Dose Rec. Produit:",
    treatmentDetailsDoseAppliedLabel: "Dose Appliquée:",
    treatmentDetailsDoseNone: "N/A (Pas de Produit)",
    treatmentDetailsMultiplierFactorLabel: "Facteur Multiplicateur:",
    treatmentDetailsMultiplierValueLabel: "Valeur Multiplicateur:",
    treatmentDetailsSurfaceLabel: "Surface Traitée:",
    treatmentDetailsQtyPerHaLabel: "Quantité par ha Calculée:",
    treatmentDetailsTotalQtyLabel: "Quantité Totale Calculée:",
    treatmentDetailsDateTimeLabel: "Date/Heure:",
    treatmentDetailsDateTimeUnscheduled: "À planifier",
    treatmentDetailsStatusLabel: "Statut:",
    treatmentDetailsNotesLabel: "Notes:",
    treatmentDetailsCalcWarning:
      "Avertissement: Veuillez choisir le facteur multiplicateur correspondant et sa valeur dans l'entrée du traitement.",
    farmDetailsTitle: "Détails du Champ",
    farmDetailsNameLabel: "Nom:",
    farmDetailsLocationLabel: "Localisation:",
    farmDetailsSizeLabel: "Taille (ha):",
    farmDetailsCropLabel: "Culture:",
    farmDetailsPlantingLabel: "Date de Semis:",
    farmDetailsHarvestLabel: "Récolte Prévue:",
    pestDetailsTitle: "Détails de la Maladie/Ravageur",
    pestDetailsNameLabel: "Nom:",
    pestDetailsTypeLabel: "Type:",
    pestDetailsSeverityLabel: "Sévérité:",
    pestDetailsActionLabel: "Action:",
    pestDetailsFarmLabel: "Champ:",
    pestDetailsCropLabel: "Culture:",
    pestDetailsObsLabel: "Observations:"
  }
};

// --- Global Language Variable ---
let currentLang = "en";

// --- Utility Functions ---
function getLocalStorage(key, defaultValue = []) {
  try {
    const storedValue = localStorage.getItem(key);
    const parsedValue =
      storedValue && storedValue !== "undefined" && storedValue !== "null"
        ? JSON.parse(storedValue)
        : defaultValue;
    if (Array.isArray(defaultValue) && !Array.isArray(parsedValue)) {
      console.warn(
        `Expected array for key "${key}" but found: ${typeof parsedValue}. Resetting to default.`
      );
      setLocalStorage(key, defaultValue);
      return defaultValue;
    }
    if (
      typeof defaultValue === "object" &&
      defaultValue !== null &&
      !Array.isArray(defaultValue) &&
      (typeof parsedValue !== "object" ||
        parsedValue === null ||
        Array.isArray(parsedValue))
    ) {
      console.warn(
        `Expected object for key "${key}" but found: ${typeof parsedValue}. Resetting to default.`
      );
      setLocalStorage(key, defaultValue);
      return defaultValue;
    }
    if (Array.isArray(parsedValue)) {
      return parsedValue.filter((item) => item !== null && item !== undefined);
    }
    return parsedValue;
  } catch (error) {
    console.error(
      `Error retrieving or parsing ${key} from local storage:`,
      error
    );
    try {
      localStorage.removeItem(key);
      console.log(`Removed potentially corrupted key ${key}`);
    } catch (removeError) {
      console.error(`Error removing corrupted key ${key}:`, removeError);
    }
    return defaultValue;
  }
}

function setLocalStorage(key, value) {
  try {
    let valueToSave = value;
    if (Array.isArray(value)) {
      valueToSave = value.filter((item) => item !== null && item !== undefined);
    }
    if (key === "treatments" && Array.isArray(valueToSave)) {
      valueToSave = valueToSave.map((treatment) => {
        const { timeoutId, ...rest } = treatment;
        return rest;
      });
    }
    localStorage.setItem(key, JSON.stringify(valueToSave));
  } catch (error) {
    console.error(`Error saving ${key} to local storage:`, error);
  }
}

function formatNumberLocale(
  number,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
) {
  if (number === null || typeof number === "undefined")
    return translations[currentLang]?.na || "N/A";
  const num = Number(number);
  if (isNaN(num)) return translations[currentLang]?.na || "N/A";

  try {
    // Use French locale formatting if currentLang is 'fr'
    const locale =
      currentLang === "fr"
        ? "fr-FR"
        : currentLang && navigator.languages?.includes(currentLang)
        ? currentLang
        : undefined;
    return num.toLocaleString(locale, {
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits
    });
  } catch (e) {
    console.error("Error formatting number with locale:", e);
    // Fallback to default formatting, ensuring correct decimal separator for French if needed
    const fallbackFormatted = num.toFixed(minimumFractionDigits);
    return currentLang === "fr"
      ? fallbackFormatted.replace(".", ",")
      : fallbackFormatted;
  }
}

function formatDateLocale(dateString) {
  if (
    !dateString ||
    typeof dateString !== "string" ||
    !dateString.includes("-")
  )
    return "?";
  try {
    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // JS months are 0-indexed
    const day = parseInt(parts[2]);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return dateString;

    const dateObj = new Date(Date.UTC(year, month, day)); // Use UTC to avoid timezone shifts for date-only
    if (isNaN(dateObj.getTime())) return dateString;

    const localeForFormatting =
      currentLang && navigator.languages?.includes(currentLang)
        ? currentLang
        : navigator.language || "en-US";

    // Options to aim for DD/MM/YYYY or JJ/MM/AAAA style
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC"
    };

    return dateObj.toLocaleDateString(localeForFormatting, options);
  } catch (e) {
    console.error("Error formatting date with locale:", e);
    // Fallback: simple reformat if toLocaleDateString fails
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }
}

function formatTimeLocale(timeString, dateString = null) {
  if (
    !timeString ||
    typeof timeString !== "string" ||
    !timeString.includes(":")
  )
    return "?";
  try {
    const [hoursStr, minutesStr] = timeString.split(":");
    const hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);

    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return timeString;
    }

    const baseDate = dateString ? dateString : "1970-01-01";
    // IMPORTANT: Construct Date object without 'Z' to parse timeString as LOCAL time.
    const dateObj = new Date(
      `${baseDate}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:00`
    );

    if (isNaN(dateObj.getTime())) return timeString;

    const localeForFormatting =
      currentLang && navigator.languages?.includes(currentLang)
        ? currentLang
        : navigator.language || "en-US";

    // Determine if 12-hour format should be used based on preference or language default
    let use12HourFormat;
    const timeFormatPreference = localStorage.getItem(TIME_FORMAT_KEY);
    if (timeFormatPreference) {
      use12HourFormat = timeFormatPreference === "12h";
    } else {
      // Language-based default for time format
      use12HourFormat = currentLang === "fr" ? false : true; // false for 24h, true for 12h
    }

    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12HourFormat
    };

    return dateObj.toLocaleTimeString(localeForFormatting, options);
  } catch (e) {
    console.error("Error formatting time with locale:", e);
    return timeString;
  }
}

function convert12hSelectTo24h(hourStr, minuteStr, period) {
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  if (
    isNaN(hour) ||
    isNaN(minute) ||
    hour < 1 ||
    hour > 12 ||
    minute < 0 ||
    minute > 59 ||
    !period
  ) {
    return null;
  }
  period = period.toUpperCase();
  let hour24 = hour;
  if (period === "PM" && hour !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour === 12) {
    hour24 = 0;
  }
  return `${String(hour24).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}`;
}

function convert24hTo12hSelect(timeString24) {
  if (
    !timeString24 ||
    typeof timeString24 !== "string" ||
    !timeString24.includes(":")
  ) {
    return null;
  }
  const parts = timeString24.split(":");
  if (parts.length < 2) return null;
  let hour24 = parseInt(parts[0]);
  let minute = parseInt(parts[1]);
  if (
    isNaN(hour24) ||
    isNaN(minute) ||
    hour24 < 0 ||
    hour24 > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }
  const period = hour24 >= 12 ? "PM" : "AM";
  let hour12 = hour24 % 12;
  if (hour12 === 0) {
    hour12 = 12;
  }
  return {
    hour: String(hour12),
    minute: String(minute).padStart(2, "0"),
    period: period
  };
}

function isPast(treatment) {
  if (
    !treatment ||
    !treatment.date ||
    !treatment.time ||
    treatment.scheduleLater
  )
    return false;
  try {
    const timeParts = treatment.time.split(":");
    const formattedTime = `${String(timeParts[0] || "00").padStart(
      2,
      "0"
    )}:${String(timeParts[1] || "00").padStart(2, "0")}:${String(
      timeParts[2] || "00"
    ).padStart(2, "0")}`;
    const treatmentDateTime = new Date(`${treatment.date}T${formattedTime}`);
    if (isNaN(treatmentDateTime.getTime())) {
      return false;
    }
    return treatmentDateTime < new Date();
  } catch (e) {
    console.error(`Error checking if treatment is past: ${e}`, treatment);
    return false;
  }
}

function getTreatmentStatusClass(treatment) {
  if (!treatment) return "";
  if (treatment.scheduleLater || !treatment.date)
    return "treatment-to-be-scheduled";
  if (treatment.status === "completed") return "treatment-completed";
  if (treatment.status !== "completed" && isPast(treatment))
    return "treatment-missed";
  return "";
}
function getStatusIcon(treatment, includeTitle = false) {
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const titleAttr = (titleKey, fallbackTitle) =>
    includeTitle ? ` title="${t(titleKey, fallbackTitle)}"` : "";
  if (!treatment) return "";
  if (treatment.scheduleLater || !treatment.date)
    return `<i class="fas fa-clock status-icon"${titleAttr(
      "planningStatusToBeScheduled",
      "To be scheduled"
    )}></i>`;
  if (treatment.status === "completed")
    return `<i class="fas fa-check-circle status-icon"${titleAttr(
      "planningStatusCompleted",
      "Completed"
    )}></i>`;
  if (treatment.status !== "completed" && isPast(treatment))
    return `<i class="fas fa-exclamation-triangle status-icon"${titleAttr(
      "planningStatusMissed",
      "Missed"
    )}></i>`;
  return ""; // Upcoming has no specific icon here
}
function getStatusText(treatment) {
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!treatment) return t("planningStatusUnknown", " (Status Unknown)");
  if (treatment.scheduleLater || !treatment.date)
    return t("planningStatusToBeScheduled", " (To be scheduled)");
  if (treatment.status === "completed")
    return t("planningStatusCompleted", " (Completed)");
  if (treatment.status !== "completed" && isPast(treatment))
    return t("planningStatusMissed", " (Missed)");
  return t("planningStatusUpcoming", " (Upcoming)");
}

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
function getFormattedDateTime() {
  // For report generation timestamp
  const now = new Date();
  try {
    const localeForFormatting =
      currentLang && navigator.languages?.includes(currentLang)
        ? currentLang
        : navigator.language || "en-US";

    // Use our custom formatDateLocale for consistent date part
    const formattedDate = formatDateLocale(getCurrentDate()); // getCurrentDate returns YYYY-MM-DD

    // Determine if 12-hour format should be used
    let use12HourFormat;
    const timeFormatPreference = localStorage.getItem(TIME_FORMAT_KEY);
    if (timeFormatPreference) {
      use12HourFormat = timeFormatPreference === "12h";
    } else {
      use12HourFormat = currentLang === "fr" ? false : true;
    }
    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: use12HourFormat
    };
    const formattedTime = now.toLocaleTimeString(
      localeForFormatting,
      timeOptions
    );

    return `${formattedDate} ${formattedTime}`;
  } catch (e) {
    console.error("Error formatting date/time for locale:", e);
    // Fallback using our consistent formatters
    const fallbackDate = formatDateLocale(getCurrentDate());
    const fallbackTime = formatTimeLocale(getCurrentTime());
    return `${fallbackDate} ${fallbackTime}`;
  }
}
function escapeHtml(unsafe) {
  if (typeof unsafe !== "string") {
    if (unsafe === null || typeof unsafe === "undefined") return "";
    try {
      if (typeof unsafe === "number" || typeof unsafe === "boolean")
        return String(unsafe);
      return String(unsafe);
    } catch {
      return "";
    }
  }
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function getBaseUnit(applicationUnit) {
  if (!applicationUnit || applicationUnit === "other") {
    return translations[currentLang]?.units || "units";
  }
  if (applicationUnit.includes("/")) {
    const parts = applicationUnit.split("/");
    return parts[0].trim();
  }
  return applicationUnit.trim();
}
function getBaseUnitType(unit) {
  if (!unit || typeof unit !== "string" || unit === "other") {
    return "other";
  }
  if (unit.endsWith("/ha")) return "perArea";
  if (unit.endsWith("/plant")) return "perPlant";
  if (unit.endsWith("/applicator")) return "perApplicator";
  if (unit.endsWith("/kg")) return "perWeight"; // Rate per kg of something (e.g. seed)
  if (unit.endsWith("/L")) return "perVolume"; // Rate per L of something (e.g. spray mix)
  if (unit.endsWith("/unit")) return "perUnit"; // NEW: e.g., g/unit, ml/unit, tablet/unit

  // For units like 'L', 'kg', 'ml', 'g', 'tablet' without a denominator.
  // These might be direct total amounts or could imply a context (like per Ha if commonly used that way).
  // 'directMeasureOrOther' signifies it's not a rate like "X per Y".
  if (
    ["l", "kg", "ml", "g", "L", "tablet", "tablets"].includes(
      unit.toLowerCase()
    )
  )
    return "directMeasureOrOther";
  return "other"; // Fallback for any other complex or unhandled units
}

// --- Language Function ---
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(
      `Language "${lang}" not found in translations. Defaulting to 'en'.`
    );
    lang = "en";
  }
  currentLang = lang;
  localStorage.setItem("selectedLanguage", lang);
  document.documentElement.lang = lang; // Update HTML lang attribute

  const elements = document.querySelectorAll("[data-translate]");
  const langDict = translations[lang];
  const fallbackDict = translations["en"]; // Use English as fallback

  elements.forEach((el) => {
    const key = el.dataset.translate;
    const translation =
      langDict[key] || fallbackDict[key] || el.dataset.translate;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      if (el.type === "submit" || el.type === "button") {
        el.value = translation;
      }
    } else if (el.tagName === "OPTION") {
      el.textContent = translation || el.textContent;
    } else if (
      el.tagName === "BUTTON" ||
      el.tagName === "SPAN" ||
      el.tagName === "LABEL" ||
      el.tagName === "H1" ||
      el.tagName === "H2" ||
      el.tagName === "H3" ||
      el.tagName === "H4" ||
      el.tagName === "H5" ||
      el.tagName === "LEGEND" ||
      el.tagName === "P" ||
      el.tagName === "A" ||
      el.tagName === "STRONG" ||
      el.tagName === "SMALL" ||
      el.tagName === "DIV"
    ) {
      const icon = el.querySelector("i");
      if (icon && el.childNodes.length > 1) {
        let textNode = null;
        for (let node of el.childNodes) {
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim() !== ""
          ) {
            textNode = node;
            break;
          }
        }
        if (textNode) {
          textNode.textContent = ` ${translation} `;
        } else {
          el.textContent = translation;
          el.prepend(icon);
        }
      } else {
        el.textContent = translation;
      }
    } else {
      el.textContent = translation;
    }
  });

  // Handle Placeholders separately
  const placeholderElements = document.querySelectorAll(
    "[data-translate-placeholder]"
  );
  placeholderElements.forEach((el) => {
    const key = el.dataset.translatePlaceholder;
    const placeholderTranslation = langDict[key] || fallbackDict[key] || key;
    el.placeholder = placeholderTranslation;
  });

  // Handle Titles separately (tooltips)
  const titleElements = document.querySelectorAll("[data-translate-title]");
  titleElements.forEach((el) => {
    const key = el.dataset.translateTitle;
    const titleTranslation = langDict[key] || fallbackDict[key] || key;
    el.title = titleTranslation;
  });

  // Translate document title (browser tab)
  document.title = langDict.appTitle || fallbackDict.appTitle;

  // Translate Calendar Month Names
  monthNamesLocalized = monthNames.map((_, index) => {
    const key = `month_${index}`;
    return langDict[key] || fallbackDict[key] || monthNames[index];
  });

  // Update Calendar Weekdays header dynamically
  const weekdaysContainer = document.querySelector(".calendar-weekdays");
  if (weekdaysContainer) {
    const weekdayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const weekdayDivs = weekdaysContainer.querySelectorAll("div");
    weekdayDivs.forEach((div, index) => {
      if (weekdayKeys[index]) {
        const dayKey = weekdayKeys[index];
        div.textContent =
          langDict[dayKey] || fallbackDict[dayKey] || dayKey.toUpperCase();
      }
    });
  }

  // Re-render dynamic parts that might contain translatable strings
  if (
    document.getElementById("farmList")?.closest(".dropdown-content")?.style
      .display === "block"
  ) {
    renderFarmList();
    updatePageTitle("planningDropdownBtn");
  }
  if (
    document.getElementById("calendarSection")?.closest(".dropdown-content")
      ?.style.display === "block"
  ) {
    renderCalendar();
    updatePageTitle("calendarDropdownBtn");
  }
  if (
    document
      .getElementById("supplySectionContent")
      ?.closest(".dropdown-content")?.style.display === "block"
  ) {
    renderSupplyList();
    updatePageTitle("inventoryDropdownBtn");
  }
  if (
    document.getElementById("reportContent")?.closest(".dropdown-content")
      ?.style.display === "block"
  ) {
    generateReport();
    updatePageTitle("reportDropdownBtn");
  }
  refreshOpenModals();
}

// *** NEW FUNCTION TO CHANGE THE MAIN PAGE TITLE ***
function updatePageTitle(activeButtonId) {
  const pageTitleEl = document.getElementById("pageTitle");
  if (!pageTitleEl) return;

  let translationKey;
  switch (activeButtonId) {
    case "planningDropdownBtn":
      translationKey = "pageTitlePlanning";
      break;
    case "calendarDropdownBtn":
      translationKey = "pageTitleCalendar";
      break;
    case "inventoryDropdownBtn":
      translationKey = "pageTitleInventory";
      break;
    case "reportDropdownBtn":
      translationKey = "pageTitleReport";
      break;
    default:
      translationKey = "pageTitlePlanning"; // Default to planning title
  }

  // Update the data-translate attribute for future language switches
  pageTitleEl.dataset.translate = translationKey;

  // Immediately update the text content based on the current language
  const newTitle =
    translations[currentLang][translationKey] ||
    translations["en"][translationKey];
  pageTitleEl.textContent = newTitle;
}

// Helper to refresh content of open modals after language change
function refreshOpenModals() {
  const openModals = document.querySelectorAll(
    '.modal[style*="display: block"]'
  );
  openModals.forEach((modal) => {
    // Re-populate specific modals if their content depends on language
    if (modal.id === "farmDetailsModal" && modal.dataset.farmId) {
      showFarmDetails(parseInt(modal.dataset.farmId));
    } else if (modal.id === "pestDiseaseDetailsModal" && modal.dataset.pestId) {
      showPestDiseaseDetails(parseInt(modal.dataset.pestId));
    } else if (
      modal.id === "treatmentDetailsModal" &&
      modal.dataset.treatmentId
    ) {
      showTreatmentDetails(parseInt(modal.dataset.treatmentId));
    } else if (modal.id === "calendarDayModal" && modal.dataset.displayedDate) {
      showCalendarDayDetails(modal.dataset.displayedDate);
    } else if (modal.id === "productStockModal" && modal.dataset.productName) {
      updateStockModalDisplay(modal.dataset.productName);
    } else if (modal.id === "supplyCalculatorModal") {
      calculateSupplyQuantities();
      validateSurfaceAreaInput();
    } else if (modal.id === "treatmentModal") {
      calculateTreatmentQuantities();
      updateAppContextValuePlaceholder();
      handleTreatmentDateTimeInputChange();
      const surfaceAreaNote = modal.querySelector("#treatmentSurfaceAreaNote");
      const maxAreaSpan = modal.querySelector("#treatmentMaxSurfaceArea");
      if (surfaceAreaNote && maxAreaSpan) {
        const farmSize = modal.dataset.associatedFarmSize
          ? parseFloat(modal.dataset.associatedFarmSize)
          : null;
        surfaceAreaNote.querySelector(
          'span[data-translate="totalSurfaceHelp1"]'
        ).textContent =
          translations[currentLang]?.totalSurfaceHelp1 ||
          "Defaults to farm size... Max:";
        maxAreaSpan.textContent =
          farmSize !== null
            ? formatNumberLocale(farmSize)
            : translations[currentLang]?.na || "N/A";
      }
    }
  });
}

// --- Global Variables ---
let currentFarmId = null;
let currentPestDiseaseId = null;
let currentAddingTreatmentForPestId = null;
let currentEditingTreatmentId = null;
let currentModalFarmSize = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const BASE_MODAL_ZINDEX = 1000;
let currentProductToRename = null;
const commonPestsDiseases = [
  "Aphids",
  "Powdery Mildew",
  "Rust",
  "Thrips",
  "Spider Mites",
  "Downy Mildew",
  "Fusarium Wilt",
  "Cutworms",
  "Whiteflies",
  "Scale Insects",
  "Mealybugs",
  "Leaf Miners",
  "Blight (Early/Late)",
  "Caterpillars",
  "Grasshoppers",
  "Leaf Spot",
  "Root Rot",
  "Stem Borer",
  "Weevil",
  "Nematode (Generic)"
].sort();
const activeTimeouts = {};
const TIME_FORMAT_KEY = "timeFormatPreference";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let monthNamesLocalized = [...monthNames];

// --- Product Data Management ---
const DEFAULT_PRODUCTS = [
  {
    name: "EcoOil",
    rate: "5 ml / L water",
    time: "Evening",
    frequency: "Bi-Weekly (as needed)",
    url: "#",
    stock: 0
  },
  {
    name: "BugGone",
    rate: "2 g / L water",
    time: "Any (avoid rain)",
    frequency: "Monthly (preventative)",
    url: "https://example.com/buggone",
    stock: 0
  },
  {
    name: "FungiStop",
    rate: "15 ml / 10 L water",
    time: "Morning",
    frequency: "Weekly during wet season",
    url: "#",
    stock: 0
  },
  {
    name: "NeemAzal",
    rate: "3 ml / L water",
    time: "Evening",
    frequency: "Every 7-10 days (active infestation)",
    url: "https://example.com/neemazal",
    stock: 0
  },
  {
    name: "CopperGuard",
    rate: "20 g / 10 L water",
    time: "Morning (dry)",
    frequency: "Before rain / As needed",
    url: "#",
    stock: 0
  },
  {
    name: "Spinosad Pro",
    rate: "1 ml / L water",
    time: "Evening (avoid bees)",
    frequency: "Weekly (if pests present)",
    url: "https://example.com/spinosad",
    stock: 0
  },
  {
    name: "Sulfur Dust",
    rate: "Apply lightly",
    time: "Dry conditions",
    frequency: "Every 10-14 days",
    url: "#",
    stock: 0
  },
  {
    name: "Bacillus Thuringiensis (BT)",
    rate: "Varies (check label)",
    time: "Evening",
    frequency: "Weekly (caterpillars)",
    url: "#",
    stock: 0
  },
  {
    name: "Pyrethrin Spray",
    rate: "As per label",
    time: "Evening/Morning (low light)",
    frequency: "As needed (contact)",
    url: "#",
    stock: 0
  },
  {
    name: "Myclobutanil Fungicide",
    rate: "Varies",
    time: "Morning",
    frequency: "Every 14 days (preventative)",
    url: "#",
    stock: 0
  },
  {
    name: "Iron Chelate",
    rate: "Soil drench/Foliar",
    time: "Any",
    frequency: "As needed (deficiency)",
    url: "#",
    stock: 0
  },
  {
    name: "Pesticide 1",
    rate: "N/A",
    time: "N/A",
    frequency: "N/A",
    url: "#",
    stock: 0
  },
  {
    name: "Pesticide 2",
    rate: "N/A",
    time: "N/A",
    frequency: "N/A",
    url: "#",
    stock: 0
  },
  {
    name: "Pesticide 3",
    rate: "N/A",
    time: "N/A",
    frequency: "N/A",
    url: "#",
    stock: 0
  },
  {
    name: "Pesticide 4",
    rate: "N/A",
    time: "N/A",
    frequency: "N/A",
    url: "#",
    stock: 0
  },
  {
    name: "Pesticide 5",
    rate: "N/A",
    time: "N/A",
    frequency: "N/A",
    url: "#",
    stock: 0
  }
];

function getProducts() {
  const products = getLocalStorage("products", DEFAULT_PRODUCTS);
  const productsWithStock = products.map((p) => ({
    ...p,
    stock: typeof p.stock === "number" && !isNaN(p.stock) ? p.stock : 0
  }));
  const defaultNames = DEFAULT_PRODUCTS.map((dp) => dp.name);
  const currentNames = productsWithStock.map((cp) => cp.name);
  const missingDefaults = DEFAULT_PRODUCTS.filter(
    (dp) => !currentNames.includes(dp.name)
  );
  const combinedProducts = [...productsWithStock, ...missingDefaults];
  return combinedProducts.sort((a, b) =>
    (a.name || "").localeCompare(b.name || "")
  );
}

function setProducts(productsArray) {
  const validProducts = productsArray.map((p) => ({
    ...p,
    stock: typeof p.stock === "number" && !isNaN(p.stock) ? p.stock : 0
  }));
  setLocalStorage("products", validProducts);
}

// --- DOM Ready Event Listener ---
document.addEventListener("DOMContentLoaded", () => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts === null || storedProducts === "undefined") {
    setProducts(DEFAULT_PRODUCTS);
  } else {
    try {
      const parsed = JSON.parse(storedProducts);
      if (!Array.isArray(parsed)) {
        console.warn(
          "Stored products data is not an array, resetting to default."
        );
        setProducts(DEFAULT_PRODUCTS);
      } else {
        const productsWithStock = parsed.map((p) => ({
          ...p,
          stock: typeof p.stock === "number" && !isNaN(p.stock) ? p.stock : 0
        }));
        setProducts(productsWithStock);
      }
    } catch (e) {
      console.error("Error parsing stored products, resetting to default:", e);
      setProducts(DEFAULT_PRODUCTS);
    }
  }

  const langSelect = document.getElementById("langSelect");
  let preferredLang = "en";

  const deviceLangs = navigator.languages || [
    navigator.language || navigator.userLanguage
  ];
  for (const langFull of deviceLangs) {
    if (langFull) {
      const langShort = langFull.split("-")[0].toLowerCase();
      if (translations[langShort]) {
        preferredLang = langShort;
        break;
      }
    }
  }

  const savedLangStorage = localStorage.getItem("selectedLanguage");
  if (savedLangStorage && translations[savedLangStorage]) {
    preferredLang = savedLangStorage;
  }

  currentLang = preferredLang;
  if (langSelect) langSelect.value = currentLang;

  populateTimeDropdowns();
  initializeTimeFormatSelection();

  initializeDropdowns();
  initializeMobileNav();

  initializeModals();
  populatePestDiseaseNameDropdown();
  initializeEventListeners();

  setLanguage(currentLang);

  initialRender();
  updateTreatmentDoseUnits();
});

// --- NEW FUNCTION TO MANAGE THE MOBILE NAVIGATION ---
function initializeMobileNav() {
  const navLinks = document.querySelectorAll(".mobile-nav .nav-link");
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetButtonId = link.dataset.target;
      const targetButton = document.getElementById(targetButtonId);

      if (targetButton) {
        targetButton.click();
        // The click handler in initializeDropdowns will now call updatePageTitle
      }

      navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const initialLink = document.querySelector(
    '.mobile-nav .nav-link[data-target="planningDropdownBtn"]'
  );
  if (initialLink) {
    initialLink.click();
  }
}

// --- Helper Functions (UPDATED for Translations) ---
function populateFarmDropdowns(selectId = null) {
  const farms = getLocalStorage("farms").sort((a, b) =>
    (a?.name || "").localeCompare(b?.name || "")
  );
  const selector = selectId ? `#${selectId}` : "#pestDiseaseFarmId";
  const farmSelects = document.querySelectorAll(selector);
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const placeholderText = t("selectFarmPlaceholder", "Select a Farm");

  if (farmSelects.length === 0 && selectId) {
    console.warn(`Farm select dropdown with ID '${selectId}' not found.`);
    return;
  } else if (farmSelects.length === 0 && !selectId) {
    return;
  }

  farmSelects.forEach((select) => {
    if (!select) return;
    const currentValue = select.value;
    const isDisabled = select.disabled;
    let firstOption = select.querySelector("option");

    if (!firstOption || firstOption.value !== "") {
      select.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
    } else {
      firstOption.textContent = placeholderText;
      while (select.options.length > 1) {
        select.remove(1);
      }
      select.selectedIndex = 0;
    }

    if (farms.length > 0) {
      farms.forEach((farm) => {
        if (farm && farm.id && farm.name) {
          const option = document.createElement("option");
          option.value = farm.id;
          option.textContent = escapeHtml(farm.name);
          select.appendChild(option);
        }
      });
    }

    if (
      currentValue &&
      select.querySelector(`option[value="${currentValue}"]`)
    ) {
      select.value = currentValue;
    } else {
      select.value = "";
    }
    select.disabled = isDisabled;
  });
}

function populatePestDiseaseNameDropdown() {
  const selectElement = document.getElementById("pestDiseaseNameSelect");
  if (!selectElement) {
    console.error(
      "Pest/Disease name select element (#pestDiseaseNameSelect) not found."
    );
    return;
  }
  while (selectElement.options.length > 1) {
    selectElement.remove(1);
  }
  commonPestsDiseases.forEach((pestName) => {
    const option = document.createElement("option");
    option.value = pestName;
    option.textContent = escapeHtml(pestName);
    selectElement.appendChild(option);
  });
}
function updateTreatmentDoseUnits() {
  const doseUnitSelect = document.getElementById("treatmentDoseUnit");
  const supplyCalcUnitSelect = document.getElementById("supplyCalcUnit");
  if (!doseUnitSelect) {
    console.error("Could not find treatmentDoseUnit select element.");
  }
  if (!supplyCalcUnitSelect) {
    console.error("Could not find supplyCalcUnit select element.");
  }

  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  const getOptions = () => [
    { value: "L/ha", text: "L/ha" },
    { value: "kg/ha", text: "kg/ha" },
    { value: "ml/ha", text: "ml/ha" },
    { value: "g/ha", text: "g/ha" },
    {
      value: "ml/applicator",
      text: currentLang === "fr" ? "ml/applicateur" : "ml/applicator"
    },
    {
      value: "g/applicator",
      text: currentLang === "fr" ? "g/applicateur" : "g/applicator"
    },
    { value: "ml/plant", text: "ml/plant" },
    { value: "g/plant", text: "g/plant" },
    { value: "ml/kg", text: "ml/kg" },
    { value: "g/kg", text: "g/kg" },
    { value: "ml/L", text: "ml/L" },
    { value: "g/L", text: "g/L" },
    { value: "g/unit", text: currentLang === "fr" ? "g/unité" : "g/unit" },
    { value: "ml/unit", text: currentLang === "fr" ? "ml/unité" : "ml/unit" },
    {
      value: "tablet/unit",
      text:
        currentLang === "fr"
          ? (1).toLocaleString(currentLang) === "1"
            ? "comprimé/unité"
            : "comprimés/unité"
          : "tablet/unit"
    },
    { value: "other", text: t("otherUnit", "other") }
  ];

  const populateSelect = (selectElement) => {
    if (!selectElement) return;
    const currentValue = selectElement.value;
    const newOptions = getOptions();

    const firstOption = selectElement.options[0];
    const placeholderKey = "selectUnitPlaceholder";
    const placeholderText = t(placeholderKey, "Select Unit...");
    const hasPlaceholder =
      firstOption && firstOption.value === "" && firstOption.disabled;

    selectElement.innerHTML = hasPlaceholder
      ? `<option value="" disabled selected>${placeholderText}</option>`
      : `<option value="" disabled selected>${placeholderText}</option>`;

    newOptions.forEach((optData) => {
      const option = document.createElement("option");
      option.value = optData.value;
      option.textContent = optData.text;
      selectElement.appendChild(option);
    });

    if (
      currentValue &&
      selectElement.querySelector(`option[value="${currentValue}"]`)
    ) {
      selectElement.value = currentValue;
    } else {
      selectElement.value = "";
    }
  };

  populateSelect(doseUnitSelect);
  populateSelect(supplyCalcUnitSelect);
}
function populateProductNameDropdown() {
  const selectElement = document.getElementById("treatmentProductNameSelect");
  if (!selectElement) {
    console.error("Treatment product name select element not found.");
    return;
  }
  const currentVal = selectElement.value;
  const placeholderOption = selectElement.options[0];
  selectElement.innerHTML = "";
  const placeholderKey = "selectProductPlaceholder";
  const placeholderText =
    translations[currentLang]?.[placeholderKey] || "Select Product...";
  if (placeholderOption && placeholderOption.value === "") {
    selectElement.insertAdjacentHTML(
      "afterbegin",
      `<option value="" disabled selected>${placeholderText}</option>`
    );
  } else {
    selectElement.insertAdjacentHTML(
      "afterbegin",
      `<option value="" disabled selected>${placeholderText}</option>`
    );
  }
  const products = getProducts();
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = escapeHtml(product.name);
    selectElement.appendChild(option);
  });
  if (
    selectElement.querySelector(`option[value="${CSS.escape(currentVal)}"]`)
  ) {
    selectElement.value = currentVal;
  } else {
    selectElement.value = "";
  }
}
function populateTimeDropdowns() {
  populateHourDropdown(document.getElementById("treatmentTimeHour24"), true);
  populateMinuteDropdown(document.getElementById("treatmentTimeMinute24"));
  populateHourDropdown(document.getElementById("treatmentTimeHour12"), false);
  populateMinuteDropdown(document.getElementById("treatmentTimeMinute12"));
}
function populateHourDropdown(selectElement, is24Hour) {
  if (!selectElement) return;
  const placeholder = selectElement.options[0];
  const placeholderText = placeholder?.dataset.translate
    ? translations[currentLang]?.[placeholder.dataset.translate] || "HH"
    : "HH";
  selectElement.innerHTML = "";
  if (placeholder) {
    const newPlaceholder = document.createElement("option");
    newPlaceholder.value = "";
    newPlaceholder.textContent = placeholderText;
    newPlaceholder.disabled = true;
    newPlaceholder.selected = true;
    selectElement.appendChild(newPlaceholder);
  }
  const start = is24Hour ? 0 : 1;
  const end = is24Hour ? 23 : 12;
  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = is24Hour ? String(i).padStart(2, "0") : String(i);
    selectElement.appendChild(option);
  }
}
function populateMinuteDropdown(selectElement) {
  if (!selectElement) return;
  const placeholder = selectElement.options[0];
  const placeholderText = placeholder?.dataset.translate
    ? translations[currentLang]?.[placeholder.dataset.translate] || "MM"
    : "MM";
  selectElement.innerHTML = "";
  if (placeholder) {
    const newPlaceholder = document.createElement("option");
    newPlaceholder.value = "";
    newPlaceholder.textContent = placeholderText;
    newPlaceholder.disabled = true;
    newPlaceholder.selected = true;
    selectElement.appendChild(newPlaceholder);
  }
  for (let i = 0; i < 60; i++) {
    const option = document.createElement("option");
    const value = String(i).padStart(2, "0");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  }
}

// --- Initializations & UI Helpers ---
function initializeDropdowns() {
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (content && content.classList.contains("dropdown-content")) {
        const isCurrentlyOpen = content.style.display === "block";

        // Close other open sections
        document
          .querySelectorAll(".dropdown-content")
          .forEach((otherContent) => {
            if (
              otherContent !== content &&
              otherContent.style.display === "block"
            ) {
              otherContent.style.display = "none";
              const otherBtn = otherContent.previousElementSibling;
              if (otherBtn?.dataset.translate === "planningDropdownBtn") {
                resetPlanningToggles(otherContent.querySelector("#farmList"));
              }
              if (otherBtn?.dataset.translate === "inventoryDropdownBtn") {
                resetInventoryToggles(
                  otherContent.querySelector("#supplyList")
                );
              }
              if (otherBtn?.dataset.translate === "reportDropdownBtn") {
                resetReportToggles(
                  otherContent.querySelector("#reportContent")
                );
              }
            }
          });

        content.style.display = isCurrentlyOpen ? "none" : "block";

        // *** THIS IS THE NEW PART: UPDATE THE PAGE TITLE ***
        if (!isCurrentlyOpen) {
          updatePageTitle(this.id);
        }

        if (isCurrentlyOpen) {
          if (this.dataset.translate === "planningDropdownBtn") {
            resetPlanningToggles(content.querySelector("#farmList"));
          }
          if (this.dataset.translate === "inventoryDropdownBtn") {
            resetInventoryToggles(content.querySelector("#supplyList"));
          }
          if (this.dataset.translate === "reportDropdownBtn") {
            resetReportToggles(content.querySelector("#reportContent"));
          }
        } else {
          if (this.dataset.translate === "calendarDropdownBtn") {
            const now = new Date();
            currentMonth = now.getMonth();
            currentYear = now.getFullYear();
            renderCalendar();
          }
          if (this.dataset.translate === "inventoryDropdownBtn") {
            renderSupplyList();
          }
        }
      } else {
        console.warn("Dropdown content not found for button:", this);
      }
    });
  });
}
function resetPlanningToggles(container) {
  if (!container) return;
  container
    .querySelectorAll(
      ".pest-section-content, .pest-upcoming-treatments, .pest-past-treatments"
    )
    .forEach((el) => (el.style.display = "none"));
  container
    .querySelectorAll(".view-pest-past-treatments-btn")
    .forEach((btn) => {
      const viewText =
        translations[currentLang]?.planningViewPastBtn ||
        "View Past Treatments";
      const hideText =
        translations[currentLang]?.planningHidePastBtn ||
        "Hide Past Treatments";
      if (btn.textContent.includes(hideText)) {
        btn.textContent = btn.textContent.replace(hideText, viewText);
      }
    });
  container
    .querySelectorAll(
      ".pest-section-toggle .toggle-icon, .pest-upcoming-toggle .toggle-icon"
    )
    .forEach((icon) => {
      icon.classList.remove("fa-caret-down", "open");
      icon.classList.add("fa-caret-right");
    });
}
function resetInventoryToggles(container) {
  if (!container) return;
  container
    .querySelectorAll(".product-uses-details")
    .forEach((el) => (el.style.display = "none"));
  container.querySelectorAll(".toggle-uses-btn i").forEach((icon) => {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  });
  container
    .querySelectorAll(".product-past-uses-list")
    .forEach((el) => (el.style.display = "none"));
  container.querySelectorAll(".view-product-past-uses-btn").forEach((btn) => {
    const viewText =
      translations[currentLang]?.inventoryViewPastUsesBtn || "View Past Uses";
    const hideText =
      translations[currentLang]?.inventoryHidePastUsesBtn || "Hide Past Uses";
    if (btn.textContent.includes(hideText)) {
      btn.textContent = btn.textContent.replace(hideText, viewText);
    }
  });
}
function resetReportToggles(container) {
  if (!container) return;
  container
    .querySelectorAll(".farm-report-content")
    .forEach((el) => (el.style.display = "none"));
  container
    .querySelectorAll(".farm-report-toggle .toggle-icon")
    .forEach((icon) => {
      icon.classList.remove("fa-caret-down", "open");
      icon.classList.add("fa-caret-right");
    });
}
function initializeModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (modal.id === "productDetailsModal") return;
    modal.style.zIndex = modal.style.zIndex || BASE_MODAL_ZINDEX;
    const closeBtn = modal.querySelector(".close-btn");
    if (closeBtn && !closeBtn.hasAttribute("data-listener-attached-close")) {
      closeBtn.addEventListener("click", () => closeModal(modal));
      closeBtn.setAttribute("data-listener-attached-close", "true");
    }
    modal.querySelectorAll('button[type="button"]').forEach((btn) => {
      const key = btn.dataset.translate;
      const modalId = modal.id;
      const isSaveNext = btn.id === "saveAndNextTreatmentBtn";
      const isGoBackButton = btn.id === "editPastDateBtn";
      const isAddStockButton = btn.id === "addStockBtn";
      const isRemoveStockButton = btn.id === "removeStockBtn";
      const isCalcSaveButton = btn.id === "saveCalculatorBtn";
      const specialHandlingModals = [
        "confirmTimestampModal",
        "pastDateWarningModal",
        "renameProductModal",
        "deleteProductConfirmModal",
        "deleteFarmConfirmModal",
        "deletePestDiseaseConfirmModal",
        "deleteTreatmentConfirmModal",
        "productStockModal",
        "supplyCalculatorModal"
      ];
      const genericCloseKeys = [
        "cancelBtn",
        "closeBtn",
        "okBtn",
        "confirmTimestampNoDefault"
      ];
      if (
        !isSaveNext &&
        !isGoBackButton &&
        !isAddStockButton &&
        !isRemoveStockButton &&
        !isCalcSaveButton &&
        ((genericCloseKeys.includes(key) &&
          !specialHandlingModals.includes(modalId)) ||
          (key === "confirmTimestampNoDefault" &&
            modalId === "confirmTimestampModal") ||
          (key === "cancelBtn" && specialHandlingModals.includes(modalId)) ||
          (key === "okBtn" &&
            (modalId === "farmDateWarningModal" ||
              modalId === "duplicateFarmWarningModal")) ||
          (key === "closeBtn" &&
            (modalId === "productStockModal" ||
              modalId === "supplyCalculatorModal")))
      ) {
        if (!btn.hasAttribute("data-generic-close-listener")) {
          btn.addEventListener("click", () => closeModal(modal));
          btn.setAttribute("data-generic-close-listener", "true");
        }
      }
    });
  });
  window.addEventListener("click", (event) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (modal.id === "productDetailsModal") return;
      if (modal.style.display === "block" && event.target === modal) {
        closeModal(modal);
      }
    });
  });
}
function closeModal(modalElement) {
  if (!modalElement) return;
  modalElement.style.display = "none";
  delete modalElement.dataset.farmId;
  delete modalElement.dataset.pestId;
  delete modalElement.dataset.treatmentId;
  delete modalElement.dataset.farmIdToDelete;
  delete modalElement.dataset.pestDiseaseIdToDelete;
  delete modalElement.dataset.treatmentIdToDelete;
  delete modalElement.dataset.displayedDate;
  delete modalElement.dataset.productName;
  delete modalElement.dataset.associatedFarmId;
  delete modalElement.dataset.associatedFarmSize;
  currentModalFarmSize = null;
  const adjInput = modalElement.querySelector("#stockModalAdjustmentInput");
  if (adjInput?._dynamicInputListener) {
    adjInput.removeEventListener("input", adjInput._dynamicInputListener);
    delete adjInput._dynamicInputListener;
  }
  const addBtn = modalElement.querySelector("#addStockBtn");
  if (addBtn?._stockAdjListener) {
    addBtn.removeEventListener("click", addBtn._stockAdjListener);
    delete addBtn._stockAdjListener;
  }
  const removeBtn = modalElement.querySelector("#removeStockBtn");
  if (removeBtn?._stockAdjListener) {
    removeBtn.removeEventListener("click", removeBtn._stockAdjListener);
    delete removeBtn._stockAdjListener;
  }
  const confirmPastBtn = modalElement.querySelector("#confirmPastDateBtn");
  if (confirmPastBtn?._specificClickListener) {
    confirmPastBtn.removeEventListener(
      "click",
      confirmPastBtn._specificClickListener
    );
    delete confirmPastBtn._specificClickListener;
  }
  const editPastBtn = modalElement.querySelector("#editPastDateBtn");
  if (editPastBtn?._specificClickListener) {
    editPastBtn.removeEventListener(
      "click",
      editPastBtn._specificClickListener
    );
    delete editPastBtn._specificClickListener;
  }
  const noTimestampBtn = modalElement.querySelector("#confirmTimestampNoBtn");
  if (noTimestampBtn?._specificClickListener) {
    noTimestampBtn.removeEventListener(
      "click",
      noTimestampBtn._specificClickListener
    );
    delete noTimestampBtn._specificClickListener;
  }
  const treatmentForm = modalElement.querySelector("#treatmentForm");
  if (treatmentForm) {
    const doseInput = treatmentForm.querySelector("#treatmentDose");
    const doseUnitSelect = treatmentForm.querySelector("#treatmentDoseUnit");
    const appContextTypeSelect = treatmentForm.querySelector(
      "#treatmentAppContextType"
    );
    const appContextValueInput = treatmentForm.querySelector(
      "#treatmentAppContextValue"
    );
    const totalSurfaceInput = treatmentForm.querySelector(
      "#treatmentTotalSurface"
    );
    const multWarn = treatmentForm.querySelector("#treatmentMultiplierWarning");
    if (doseInput && doseInput._calcListener) {
      doseInput.removeEventListener("input", doseInput._calcListener);
      delete doseInput._calcListener;
    }
    if (doseUnitSelect && doseUnitSelect._calcListener) {
      doseUnitSelect.removeEventListener(
        "change",
        doseUnitSelect._calcListener
      );
      delete doseUnitSelect._calcListener;
    }
    if (doseUnitSelect && doseUnitSelect._contextStateListener) {
      doseUnitSelect.removeEventListener(
        "change",
        doseUnitSelect._contextStateListener
      );
      delete doseUnitSelect._contextStateListener;
    }
    if (appContextTypeSelect && appContextTypeSelect._calcListener) {
      appContextTypeSelect.removeEventListener(
        "change",
        appContextTypeSelect._calcListener
      );
      delete appContextTypeSelect._calcListener;
    }
    if (appContextTypeSelect && appContextTypeSelect._placeholderListener) {
      appContextTypeSelect.removeEventListener(
        "change",
        appContextTypeSelect._placeholderListener
      );
      delete appContextTypeSelect._placeholderListener;
    }
    if (appContextValueInput && appContextValueInput._calcListener) {
      appContextValueInput.removeEventListener(
        "input",
        appContextValueInput._calcListener
      );
      delete appContextValueInput._calcListener;
    }
    if (totalSurfaceInput && totalSurfaceInput._calcListener) {
      totalSurfaceInput.removeEventListener(
        "input",
        totalSurfaceInput._calcListener
      );
      delete totalSurfaceInput._calcListener;
    }
    if (totalSurfaceInput && totalSurfaceInput._surfaceLimitListener) {
      totalSurfaceInput.removeEventListener(
        "input",
        totalSurfaceInput._surfaceLimitListener
      );
      delete totalSurfaceInput._surfaceLimitListener;
    }
    if (multWarn) multWarn.style.display = "none";
  }
}
function toggleVisibility(contentElement, iconElement) {
  if (!contentElement || !iconElement) return;
  const isOpening =
    contentElement.style.display === "none" ||
    contentElement.style.display === "";
  contentElement.style.display = isOpening ? "block" : "none";
  iconElement.classList.toggle("fa-caret-right", !isOpening);
  iconElement.classList.toggle("fa-caret-down", isOpening);
  iconElement.classList.toggle("open", isOpening);
}
function toggleInventoryItemDetails(buttonElement) {
  const listItem = buttonElement.closest(".supply-list-item");
  if (!listItem) return;
  const detailsDiv = listItem.querySelector(".product-uses-details");
  const icon = buttonElement.querySelector("i");
  if (!detailsDiv || !icon) {
    console.warn("Could not find details div or icon for inventory toggle.");
    return;
  }
  const isOpening =
    detailsDiv.style.display === "none" || detailsDiv.style.display === "";
  detailsDiv.style.display = isOpening ? "block" : "none";
  icon.classList.toggle("fa-chevron-down", !isOpening);
  icon.classList.toggle("fa-chevron-up", isOpening);
  if (isOpening) {
    const pastList = detailsDiv.querySelector(".product-past-uses-list");
    const pastToggleBtn = listItem.querySelector(".view-product-past-uses-btn");
    if (pastList) pastList.style.display = "none";
    if (pastToggleBtn) {
      const viewText =
        translations[currentLang]?.inventoryViewPastUsesBtn || "View Past Uses";
      const hideText =
        translations[currentLang]?.inventoryHidePastUsesBtn || "Hide Past Uses";
      if (pastToggleBtn.textContent.includes(hideText)) {
        pastToggleBtn.textContent = pastToggleBtn.textContent.replace(
          hideText,
          viewText
        );
      }
    }
  }
}
function toggleInventoryPastUsesView(buttonElement) {
  const detailsSection = buttonElement.closest(".product-uses-details");
  if (!detailsSection) return;
  const pastListContainer = detailsSection.querySelector(
    ".product-past-uses-list"
  );
  if (!pastListContainer) {
    console.error(`Past uses container not found within details section.`);
    return;
  }
  const isVisible = pastListContainer.style.display === "block";
  const viewText =
    translations[currentLang]?.inventoryViewPastUsesBtn || "View Past Uses";
  const hideText =
    translations[currentLang]?.inventoryHidePastUsesBtn || "Hide Past Uses";
  if (isVisible) {
    pastListContainer.style.display = "none";
    buttonElement.textContent = buttonElement.textContent.replace(
      hideText,
      viewText
    );
  } else {
    pastListContainer.style.display = "block";
    buttonElement.textContent = buttonElement.textContent.replace(
      viewText,
      hideText
    );
  }
}

// --- Time Format & Dropdown Functions ---
function initializeTimeFormatSelection() {
  const formatRadios = document.querySelectorAll('input[name="timeFormat"]');
  let languageBasedDefaultFormat = "12h";
  if (currentLang === "fr") {
    languageBasedDefaultFormat = "24h";
  }
  const savedFormat =
    localStorage.getItem(TIME_FORMAT_KEY) || languageBasedDefaultFormat;

  formatRadios.forEach((radio) => {
    if (radio.value === savedFormat) {
      radio.checked = true;
    }
    if (!radio.hasAttribute("data-timeformat-listener")) {
      radio.addEventListener("change", handleTimeFormatChange);
      radio.setAttribute("data-timeformat-listener", "true");
    }
  });
  updateTimeInputUI();
}

function handleTimeFormatChange() {
  const selectedFormat =
    document.querySelector('input[name="timeFormat"]:checked')?.value || "24h";
  localStorage.setItem(TIME_FORMAT_KEY, selectedFormat);
  updateTimeInputUI();
  const modal = document.getElementById("treatmentModal");
  if (modal && modal.style.display === "block" && currentEditingTreatmentId) {
    const treatment = getLocalStorage("treatments").find(
      (t) => t && t.id === currentEditingTreatmentId
    );
    if (treatment && treatment.time && !treatment.scheduleLater) {
      populateTimeInputs(treatment.time);
    } else {
      clearTimeSelects(selectedFormat === "12h" ? "24h" : "12h");
    }
  } else if (modal && modal.style.display === "block") {
    clearTimeSelects(selectedFormat === "12h" ? "24h" : "12h");
  }
  handleTreatmentDateTimeInputChange();
}
function clearTimeSelects(formatToClear) {
  if (formatToClear === "12h") {
    document.getElementById("treatmentTimeHour12").value = "";
    document.getElementById("treatmentTimeMinute12").value = "";
    document.getElementById("treatmentTimeAmPm12").value = "AM";
  } else {
    document.getElementById("treatmentTimeHour24").value = "";
    document.getElementById("treatmentTimeMinute24").value = "";
  }
}
function updateTimeInputUI() {
  const selectedFormat = localStorage.getItem(TIME_FORMAT_KEY) || "24h";
  const wrapper24h = document.getElementById("timeInput24hWrapper");
  const wrapper12h = document.getElementById("timeInput12hWrapper");
  const hour24 = document.getElementById("treatmentTimeHour24");
  const minute24 = document.getElementById("treatmentTimeMinute24");
  const hour12 = document.getElementById("treatmentTimeHour12");
  const minute12 = document.getElementById("treatmentTimeMinute12");
  const ampm12 = document.getElementById("treatmentTimeAmPm12");
  if (
    !wrapper24h ||
    !wrapper12h ||
    !hour24 ||
    !minute24 ||
    !hour12 ||
    !minute12 ||
    !ampm12
  ) {
    console.error("Time input wrappers or select elements not found.");
    return;
  }
  const isScheduleLaterChecked = document.getElementById(
    "treatmentScheduleLater"
  )?.checked;
  const isDateEntered = document.getElementById("treatmentDate")?.value !== "";
  const isTimeEnabled = isDateEntered && !isScheduleLaterChecked;
  if (selectedFormat === "12h") {
    wrapper24h.style.display = "none";
    wrapper12h.style.display = "";
    hour12.required = isTimeEnabled;
    minute12.required = isTimeEnabled;
    ampm12.required = isTimeEnabled;
    hour24.required = false;
    minute24.required = false;
  } else {
    wrapper24h.style.display = "";
    wrapper12h.style.display = "none";
    hour24.required = isTimeEnabled;
    minute24.required = isTimeEnabled;
    hour12.required = false;
    minute12.required = false;
    ampm12.required = false;
  }
}
function populateTimeInputs(timeString24) {
  const selectedFormat = localStorage.getItem(TIME_FORMAT_KEY) || "24h";
  const hour24Select = document.getElementById("treatmentTimeHour24");
  const minute24Select = document.getElementById("treatmentTimeMinute24");
  const hour12Select = document.getElementById("treatmentTimeHour12");
  const minute12Select = document.getElementById("treatmentTimeMinute12");
  const ampm12Select = document.getElementById("treatmentTimeAmPm12");
  if (
    !hour24Select ||
    !minute24Select ||
    !hour12Select ||
    !minute12Select ||
    !ampm12Select
  )
    return;
  if (selectedFormat === "12h") {
    const time12h = convert24hTo12hSelect(timeString24);
    if (time12h) {
      hour12Select.value = time12h.hour;
      minute12Select.value = time12h.minute;
      ampm12Select.value = time12h.period;
    } else {
      clearTimeSelects("12h");
    }
    clearTimeSelects("24h");
  } else {
    if (timeString24 && timeString24.includes(":")) {
      const [hourStr, minuteStr] = timeString24.split(":");
      hour24Select.value = String(parseInt(hourStr));
      minute24Select.value = minuteStr;
    } else {
      clearTimeSelects("24h");
    }
    clearTimeSelects("12h");
  }
}

// --- Event Listener Setup ---
function initializeEventListeners() {
  const addListener = (selector, event, handler, parent = document) => {
    const element = parent.querySelector(selector);
    if (element) {
      const listenerAttrName = `data-${event}-listener-attached`;
      if (!element.hasAttribute(listenerAttrName)) {
        element.addEventListener(event, handler);
        element.setAttribute(listenerAttrName, "true");
      }
    } else {
      const optionalSelectors = ["#saveAndNextTreatmentBtn"];
      const coreSelectors = [
        "#langSelect",
        "#addFarmBtn",
        "#farmForm",
        "#deleteFarmConfirmBtn",
        "#pestDiseaseForm",
        "#deletePestDiseaseConfirmBtn",
        "#pestDiseaseFarmId",
        "#pestDiseaseCategory",
        "#pestDiseaseNotInList",
        "#treatmentForm",
        "#deleteTreatmentConfirmBtn",
        "#treatmentProductNameSelect",
        "#treatmentNoneProductListed",
        "#treatmentScheduleLater",
        "#treatmentDate",
        "#prevMonthBtn",
        "#nextMonthBtn",
        "#generateReportBtn",
        "#supplyCalculatorForm",
        "#renameProductForm",
        "#deleteProductConfirmBtn",
        "#confirmTimestampYesBtn",
        "#editPastDateBtn",
        "#addStockBtn",
        "#removeStockBtn",
        "#treatmentDoseUnit",
        "#treatmentTimeHour24",
        "#treatmentTimeMinute24",
        "#treatmentTimeHour12",
        "#treatmentTimeMinute12",
        "#treatmentTimeAmPm12"
      ];
      if (
        coreSelectors.includes(selector) &&
        !optionalSelectors.includes(selector)
      ) {
        console.warn(
          `Core element '${selector}' not found for listener: ${event}`
        );
      }
    }
  };

  addListener("#langSelect", "change", (event) => {
    setLanguage(event.target.value);
    populateFarmDropdowns();
    populatePestDiseaseNameDropdown();
    updateTreatmentDoseUnits();
    populateProductNameDropdown();
    populateTimeDropdowns();
  });

  addListener("#addFarmBtn", "click", openAddFarmModal);
  addListener("#farmForm", "submit", handleFarmSubmit);
  addListener("#deleteFarmConfirmBtn", "click", handleDeleteFarm);
  addListener("#pestDiseaseForm", "submit", handlePestDiseaseSubmit);
  addListener("#deletePestDiseaseConfirmBtn", "click", handleDeletePestDisease);
  addListener("#pestDiseaseFarmId", "change", handlePestFarmChange);
  addListener("#pestDiseaseNotInList", "change", togglePestNameInput);
  addListener("#pestDiseaseCategory", "change", toggleDiagnoseMessage);
  addListener("#treatmentForm", "submit", handleTreatmentSubmit);
  addListener("#saveAndNextTreatmentBtn", "click", handleSaveAndNextTreatment);
  addListener("#deleteTreatmentConfirmBtn", "click", handleDeleteTreatment);
  addListener(
    "#treatmentScheduleLater",
    "change",
    handleScheduleLaterCheckboxChange
  );
  addListener("#treatmentDate", "input", handleTreatmentDateTimeInputChange);
  addListener(
    "#treatmentTimeHour24",
    "change",
    handleTreatmentDateTimeInputChange
  );
  addListener(
    "#treatmentTimeMinute24",
    "change",
    handleTreatmentDateTimeInputChange
  );
  addListener(
    "#treatmentTimeHour12",
    "change",
    handleTreatmentDateTimeInputChange
  );
  addListener(
    "#treatmentTimeMinute12",
    "change",
    handleTreatmentDateTimeInputChange
  );
  addListener(
    "#treatmentTimeAmPm12",
    "change",
    handleTreatmentDateTimeInputChange
  );
  const treatmentModal = document.getElementById("treatmentModal");
  if (treatmentModal) {
    const productSelect = treatmentModal.querySelector(
      "#treatmentProductNameSelect"
    );
    const noneProductCheck = treatmentModal.querySelector(
      "#treatmentNoneProductListed"
    );
    if (
      productSelect &&
      !productSelect.hasAttribute("data-change-listener-attached")
    ) {
      productSelect.addEventListener("change", handleProductSelectionChange);
      productSelect.setAttribute("data-change-listener-attached", "true");
    }
    if (
      noneProductCheck &&
      !noneProductCheck.hasAttribute("data-change-listener-attached")
    ) {
      noneProductCheck.addEventListener(
        "change",
        handleNoneProductCheckboxChange
      );
      noneProductCheck.setAttribute("data-change-listener-attached", "true");
    }
  }
  addListener("#prevMonthBtn", "click", navigateCalendar(-1));
  addListener("#nextMonthBtn", "click", navigateCalendar(1));
  addListener("#supplyCalculatorForm", "input", handleSupplyCalculatorChange);
  addListener("#renameProductForm", "submit", handleRenameProductSubmit);
  addListener(
    "#deleteProductConfirmBtn",
    "click",
    handleDeleteProductTreatments
  );
  addListener("#confirmTimestampYesBtn", "click", () => {
    const modal = document.getElementById("confirmTimestampModal");
    const id = parseInt(modal?.dataset?.treatmentId ?? "");
    if (id) {
      completeTreatmentAction(id, true);
    } else {
      console.warn("Treatment ID missing on timestamp modal.");
      if (modal) closeModal(modal);
    }
  });

  // Delegated Listeners
  const farmListContainer = document.getElementById("farmList");
  if (
    farmListContainer &&
    !farmListContainer.hasAttribute("data-delegated-click-listener")
  ) {
    farmListContainer.addEventListener("click", function (event) {
      const target = event.target;
      const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

      const pestToggleHeader = target.closest(".pest-section-toggle");
      if (pestToggleHeader) {
        const farmId = parseInt(pestToggleHeader.dataset.farmId ?? "");
        const pestContent = document.getElementById(
          `farm-${farmId}-pests-content`
        );
        const icon = pestToggleHeader.querySelector(".toggle-icon");
        if (farmId && pestContent && icon) toggleVisibility(pestContent, icon);
        event.stopPropagation();
        return;
      }
      const upcomingToggleHeader = target.closest(".pest-upcoming-toggle");
      if (upcomingToggleHeader) {
        const pestId = parseInt(upcomingToggleHeader.dataset.pestId ?? "");
        const upcomingList = document.getElementById(`pest-${pestId}-upcoming`);
        const icon = upcomingToggleHeader.querySelector(".toggle-icon");
        if (pestId && upcomingList && icon)
          toggleVisibility(upcomingList, icon);
        event.stopPropagation();
        return;
      }
      const pastTreatmentsButton = target.closest(
        ".view-pest-past-treatments-btn"
      );
      if (pastTreatmentsButton) {
        const pestId = parseInt(pastTreatmentsButton.dataset.pestId ?? "");
        if (pestId) togglePestPastTreatmentsView(pestId, pastTreatmentsButton);
        event.stopPropagation();
        return;
      }

      const actionButton = target.closest("button");
      if (actionButton) {
        const farmItem = actionButton.closest(".farm-item");
        const pestItem = actionButton.closest(".farm-pest-disease-item");
        const nestedTreatmentItem = actionButton.closest(
          ".nested-treatment-item"
        );
        const farmId = farmItem?.dataset.farmId
          ? parseInt(farmItem.dataset.farmId)
          : null;
        const pestId = pestItem?.dataset.pestId
          ? parseInt(pestItem.dataset.pestId)
          : null;
        const treatmentId = nestedTreatmentItem?.dataset.treatmentId
          ? parseInt(nestedTreatmentItem.dataset.treatmentId)
          : null;

        const titleKey = actionButton.dataset.translateTitle;
        let actionType = null;
        if (actionButton.classList.contains("complete-btn"))
          actionType = "complete";
        else if (actionButton.classList.contains("unmark-btn"))
          actionType = "unmark";
        else if (actionButton.classList.contains("details-btn"))
          actionType = "details";
        else if (actionButton.classList.contains("edit-btn"))
          actionType = "edit";
        else if (actionButton.classList.contains("delete-btn"))
          actionType = "delete";
        else if (titleKey === "addTreatmentBtnTitle")
          actionType = "addTreatment";
        else if (titleKey === "addPestBtnTitle") actionType = "addPest";

        if (treatmentId) {
          if (actionType === "complete") handleMarkCompleted(treatmentId);
          else if (actionType === "unmark") handleUnmarkCompleted(treatmentId);
          else if (actionType === "details") showTreatmentDetails(treatmentId);
          else if (actionType === "edit") editTreatment(treatmentId);
          else if (actionType === "delete") confirmDeleteTreatment(treatmentId);
        } else if (pestId) {
          if (actionType === "details") showPestDiseaseDetails(pestId);
          else if (actionType === "edit") editPestDisease(pestId);
          else if (actionType === "delete") confirmDeletePestDisease(pestId);
          else if (actionType === "addTreatment")
            openAddTreatmentForPest(pestId);
        } else if (farmId) {
          if (actionType === "details") showFarmDetails(farmId);
          else if (actionType === "edit") editFarm(farmId);
          else if (actionType === "delete") confirmDeleteFarm(farmId);
          else if (actionType === "addPest") openAddPestDiseaseModal(farmId);
        }
        event.stopPropagation();
      }
    });
    farmListContainer.setAttribute("data-delegated-click-listener", "true");
  } else if (!farmListContainer) {
    console.warn("Farm List container not found for delegated listener.");
  }

  const reportContentContainer = document.getElementById("reportContent");
  if (
    reportContentContainer &&
    !reportContentContainer.hasAttribute("data-farm-report-toggle-listener")
  ) {
    reportContentContainer.addEventListener("click", function (event) {
      const toggleButton = event.target.closest(".farm-report-toggle");
      if (toggleButton) {
        const content = toggleButton.nextElementSibling;
        const icon = toggleButton.querySelector(".toggle-icon");
        if (content?.classList.contains("farm-report-content") && icon) {
          const isOpening = content.style.display === "none";
          this.querySelectorAll(".farm-report-content").forEach(
            (otherContent) => {
              if (
                otherContent !== content &&
                otherContent.style.display === "block"
              ) {
                otherContent.style.display = "none";
                const otherIcon = otherContent.previousElementSibling?.querySelector(
                  ".toggle-icon"
                );
                if (otherIcon) {
                  otherIcon.classList.remove("fa-caret-down", "open");
                  otherIcon.classList.add("fa-caret-right");
                }
              }
            }
          );
          toggleVisibility(content, icon);
        }
      }
    });
    reportContentContainer.setAttribute(
      "data-farm-report-toggle-listener",
      "true"
    );
  } else if (!reportContentContainer) {
    console.warn("Report Content container not found for delegated listener.");
  }

  const calendarGrid = document.getElementById("calendar");
  if (
    calendarGrid &&
    !calendarGrid.hasAttribute("data-calendar-click-listener")
  ) {
    calendarGrid.addEventListener("click", (event) => {
      const dayCell = event.target.closest("div:not(.empty-cell)");
      if (dayCell?.dataset.date) showCalendarDayDetails(dayCell.dataset.date);
    });
    calendarGrid.setAttribute("data-calendar-click-listener", "true");
  }

  const supplyList = document.getElementById("supplyList");
  if (supplyList && !supplyList.hasAttribute("data-supply-click-listener")) {
    supplyList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;

      const listItem = button.closest(".supply-list-item");
      const treatmentLi = button.closest("li[data-treatment-id]");
      const treatmentId = treatmentLi
        ? parseInt(treatmentLi.dataset.treatmentId)
        : null;
      const productName = listItem?.dataset?.productName;
      const titleKey = button.dataset.translateTitle;

      if (titleKey === "inventoryShowDetailsBtnTitle" && listItem) {
        toggleInventoryItemDetails(button);
        event.stopPropagation();
      } else if (titleKey === "inventoryEditStockBtnTitle" && productName) {
        openProductStockModal(encodeURIComponent(productName));
        event.stopPropagation();
      } else if (button.closest(".treatment-actions") && treatmentId) {
        let actionType = null;
        if (button.classList.contains("complete-btn")) actionType = "complete";
        else if (button.classList.contains("unmark-btn")) actionType = "unmark";
        else if (button.classList.contains("details-btn"))
          actionType = "details";
        else if (button.classList.contains("edit-btn")) actionType = "edit";
        else if (button.classList.contains("delete-btn")) actionType = "delete";

        if (actionType === "complete") {
          handleMarkCompleted(treatmentId);
          event.stopPropagation();
        } else if (actionType === "unmark") {
          handleUnmarkCompleted(treatmentId);
          event.stopPropagation();
        } else if (actionType === "details") {
          showTreatmentDetails(treatmentId);
          event.stopPropagation();
        } else if (actionType === "edit") {
          editTreatment(treatmentId);
          event.stopPropagation();
        } else if (actionType === "delete") {
          confirmDeleteTreatment(treatmentId);
          event.stopPropagation();
        }
      } else if (button.onclick) {
        console.log("Allowing fallback onclick for:", button);
      }
    });
    supplyList.setAttribute("data-supply-click-listener", "true");
  }

  const calendarDayModalDetails = document.getElementById("calendarDayDetails");
  if (
    calendarDayModalDetails &&
    !calendarDayModalDetails.hasAttribute("data-calendar-day-click-listener")
  ) {
    calendarDayModalDetails.addEventListener("click", function (event) {
      const button = event.target.closest("button");
      if (!button) return;
      const li = button.closest("li[data-treatment-id]");
      if (!li) return;
      const treatmentId = parseInt(li.dataset.treatmentId);
      if (!treatmentId) return;

      let actionType = null;
      if (button.classList.contains("complete-btn")) actionType = "complete";
      else if (button.classList.contains("unmark-btn")) actionType = "unmark";
      else if (button.classList.contains("details-btn")) actionType = "details";
      else if (button.classList.contains("edit-btn")) actionType = "edit";
      else if (button.classList.contains("delete-btn")) actionType = "delete";

      if (actionType === "complete") handleMarkCompleted(treatmentId);
      else if (actionType === "unmark") handleUnmarkCompleted(treatmentId);
      else if (actionType === "details") showTreatmentDetails(treatmentId);
      else if (actionType === "edit") editTreatment(treatmentId);
      else if (actionType === "delete") confirmDeleteTreatment(treatmentId);

      event.stopPropagation();
    });
    calendarDayModalDetails.setAttribute(
      "data-calendar-day-click-listener",
      "true"
    );
  }
}

// --- initialRender ---
function initialRender() {
  const now = new Date();
  currentMonth = now.getMonth();
  currentYear = now.getFullYear();
  renderFarmList();
  renderCalendar();
  renderSupplyList();
  generateReport();
  scheduleNotifications();
}

// --- Farm Section ---
function openAddFarmModal() {
  currentFarmId = null;
  const modal = document.getElementById("farmModal");
  const form = document.getElementById("farmForm");
  if (!form || !modal) {
    console.error("Farm modal or form not found!");
    return;
  }
  form.reset();
  form.querySelector("#crop").value = "";
  modal.style.zIndex = BASE_MODAL_ZINDEX;
  modal.style.display = "block";
  form.querySelector("#farmName")?.focus();
}
function showFarmDateValidationError() {
  const modal = document.getElementById("farmDateWarningModal");
  if (modal) {
    modal.style.zIndex =
      parseInt(
        document.getElementById("farmModal")?.style.zIndex || BASE_MODAL_ZINDEX
      ) + 5;
    modal.style.display = "block";
  } else {
    console.error("Farm Date Warning Modal element not found!");
    alert(
      translations[currentLang]?.farmDateOrderError ||
        "The Expected Harvest Date cannot be scheduled before the Planting Date. Please update the dates."
    );
  }
}
function showDuplicateFarmWarning() {
  const modal = document.getElementById("duplicateFarmWarningModal");
  if (modal) {
    modal.style.zIndex =
      parseInt(
        document.getElementById("farmModal")?.style.zIndex || BASE_MODAL_ZINDEX
      ) + 5;
    modal.style.display = "block";
  } else {
    console.error("Duplicate Farm Warning Modal element not found!");
    alert(
      translations[currentLang]?.farmDuplicateError ||
        "A farm with the same Name, Size (ha), and Crop already exists."
    );
  }
}
function handleFarmSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const farmName = form.querySelector("#farmName").value.trim();
  const farmLocation = form.querySelector("#farmLocation").value.trim();
  const farmSizeInput = form.querySelector("#farmSize").value;
  const crop = form.querySelector("#crop").value;
  const plantingDateValue = form.querySelector("#farmPlantingDate").value;
  const harvestDateValue = form.querySelector("#farmHarvestDate").value;
  if (!farmName || !farmLocation || !farmSizeInput || !crop) {
    alert(
      translations[currentLang]?.farmValidationError ||
        "Please fill in all required farm fields (Name, Location, Size, Crop)."
    );
    return;
  }
  const farmSize = parseFloat(farmSizeInput);
  if (isNaN(farmSize) || farmSize < 0) {
    alert(
      translations[currentLang]?.farmSizeError ||
        "Invalid Farm Size (ha). Please enter a valid non-negative number."
    );
    return;
  }
  if (plantingDateValue && harvestDateValue) {
    try {
      const plantingDate = new Date(plantingDateValue + "T00:00:00Z");
      const harvestDate = new Date(harvestDateValue + "T00:00:00Z");
      if (isNaN(plantingDate.getTime()) || isNaN(harvestDate.getTime())) {
        alert(
          translations[currentLang]?.farmDateParseError ||
            "Could not validate farm dates. Please check the format."
        );
        return;
      }
      if (harvestDate < plantingDate) {
        showFarmDateValidationError();
        return;
      }
    } catch (dateError) {
      console.error("Error comparing farm dates:", dateError);
      alert(
        translations[currentLang]?.farmDateParseError ||
          "Could not validate farm dates. Please check the format."
      );
      return;
    }
  }
  const farmData = {
    name: farmName,
    location: farmLocation,
    farmSize: farmSize,
    crop: crop,
    plantingDate: plantingDateValue || "",
    harvestDate: harvestDateValue || ""
  };
  let farms = getLocalStorage("farms");
  if (!currentFarmId) {
    const isDuplicate = farms.some(
      (existingFarm) =>
        existingFarm &&
        existingFarm.name.toLowerCase() === farmData.name.toLowerCase() &&
        existingFarm.farmSize === farmData.farmSize &&
        existingFarm.crop === farmData.crop
    );
    if (isDuplicate) {
      showDuplicateFarmWarning();
      return;
    }
    farmData.id = Date.now();
    farms.push(farmData);
  } else {
    let found = false;
    farms = farms.map((f) => {
      if (f && f.id === currentFarmId) {
        found = true;
        return { ...f, ...farmData };
      }
      return f;
    });
    if (!found) {
      console.error("Farm ID to edit not found:", currentFarmId);
      alert(
        translations[currentLang]?.farmEditError ||
          "Error: Could not find the farm to update."
      );
      closeModal(document.getElementById("farmModal"));
      return;
    }
  }
  setLocalStorage("farms", farms);
  closeModal(document.getElementById("farmModal"));
  renderFarmList();
  populateFarmDropdowns();
  generateReport();
}
function renderFarmList() {
  const farmListContainer = document.getElementById("farmList");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!farmListContainer) {
    console.error("Farm list container #farmList not found.");
    return;
  }
  const heading = farmListContainer.querySelector("h4");
  farmListContainer.innerHTML = heading
    ? heading.outerHTML
    : `<h4 data-translate="farmsAndPestsTitle">${t(
        "farmsAndPestsTitle",
        "My farms"
      )}</h4>`;
  const farms = getLocalStorage("farms");
  const pestsDiseases = getLocalStorage("pestsDiseases");
  const allTreatments = getLocalStorage("treatments");
  if (farms.length === 0) {
    farmListContainer.innerHTML += `<p data-translate="planningNoFarmsMsg">${t(
      "planningNoFarmsMsg",
      'No farms added yet. Use "Add New Farm" to start.'
    )}</p>`;
    return;
  }
  const severityOrder = { high: 3, medium: 2, low: 1, none: 0 };
  const getSeverityScore = (severity = "none") =>
    severityOrder[severity.toLowerCase()] ?? 0;
  farms.sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
  farms.forEach((farm) => {
    if (!farm || !farm.id) {
      console.warn("Skipping invalid farm data:", farm);
      return;
    }
    const farmDiv = document.createElement("div");
    farmDiv.classList.add("farm-item", "list-item");
    farmDiv.dataset.farmId = farm.id;
    const farmSizeDisplay =
      typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
        ? ` | ${formatNumberLocale(farm.farmSize)} ha`
        : "";
    const translatedCrop =
      translations[currentLang]?.[farm.crop] || escapeHtml(farm.crop || "");
    const farmCropDisplay = farm.crop
      ? ` | ${t("cropLabel", "Crop:")} ${translatedCrop}`
      : "";
    const farmLocationDisplay = farm.location
      ? escapeHtml(farm.location)
      : t("na", "N/A");
    farmDiv.innerHTML = `<div class="list-item-info"><strong>${escapeHtml(
      farm.name
    )}</strong><p>${farmLocationDisplay}${farmSizeDisplay}${farmCropDisplay}</p></div><div class="list-item-actions"><button class="details-btn" data-translate-title="detailsBtnTitle" title="${t(
      "detailsBtnTitle",
      "Details"
    )}"><i class="fas fa-info-circle"></i></button><button class="edit-btn" data-translate-title="editBtnTitle" title="${t(
      "editBtnTitle",
      "Edit"
    )}"><i class="fas fa-edit"></i></button><button class="delete-btn" data-translate-title="deleteBtnTitle" title="${t(
      "deleteBtnTitle",
      "Delete"
    )}"><i class="fas fa-trash-alt"></i></button><button class="add-pest-btn" data-translate-title="addPestBtnTitle" title="${t(
      "addPestBtnTitle",
      "Add Pest/Disease"
    )}"><i class="fas fa-plus"></i> <i class="fas fa-bug"></i></button></div>`;
    const relatedPests = pestsDiseases
      .filter((pd) => pd && pd.farmId === farm.id)
      .sort((a, b) => {
        const scoreA = getSeverityScore(a.severity);
        const scoreB = getSeverityScore(b.severity);
        if (scoreB !== scoreA) return scoreB - scoreA;
        return (a.name || "").localeCompare(b.name || "");
      });
    if (relatedPests.length > 0) {
      const farmPestContainer = document.createElement("div");
      farmPestContainer.classList.add("farm-pest-container");
      farmPestContainer.id = `farm-${farm.id}-pest-section`;
      farmPestContainer.innerHTML = `<h5 class="pest-section-toggle" data-farm-id="${
        farm.id
      }"><i class="fas fa-caret-right toggle-icon"></i> ${t(
        "planningPestsHeader",
        "Pests & Diseases"
      )} (<span class="pest-count">${relatedPests.length}</span>)</h5>`;
      const pestContentDiv = document.createElement("div");
      pestContentDiv.classList.add("pest-section-content");
      pestContentDiv.id = `farm-${farm.id}-pests-content`;
      pestContentDiv.style.display = "none";
      pestContentDiv.innerHTML = `<div class="severity-legend"><span class="severity-legend-label">${t(
        "planningSeverityLegendLabel",
        "Severity:"
      )}</span><span><span class="legend-indicator none"></span> ${t(
        "planningSeverityNone",
        "None"
      )}</span><span><span class="legend-indicator low"></span> ${t(
        "planningSeverityLow",
        "Low"
      )}</span><span><span class="legend-indicator medium"></span> ${t(
        "planningSeverityMedium",
        "Medium"
      )}</span><span><span class="legend-indicator high"></span> ${t(
        "planningSeverityHigh",
        "High"
      )}</span></div>`;
      const pestListDiv = document.createElement("div");
      pestListDiv.id = `farm-${farm.id}-pests`;
      relatedPests.forEach((pestDisease) => {
        if (!pestDisease || !pestDisease.id) {
          console.warn("Skipping invalid pest/disease data:", pestDisease);
          return;
        }
        const pestDiv = document.createElement("div");
        pestDiv.classList.add("farm-pest-disease-item");
        pestDiv.dataset.pestId = pestDisease.id;
        const severityClass = escapeHtml(
          pestDisease.severity?.toLowerCase() || "none"
        );
        const severityText = t(
          `severity${
            pestDisease.severity?.charAt(0).toUpperCase() +
              pestDisease.severity?.slice(1).toLowerCase() || "None"
          }`,
          pestDisease.severity || "N/A"
        );
        const actionText = t(
          `action${
            pestDisease.action?.charAt(0).toUpperCase() +
              pestDisease.action?.slice(1).toLowerCase() || "None"
          }`,
          pestDisease.action || "N/A"
        );

        let categoryDisplay;
        if (pestDisease.category === "unknown") {
          categoryDisplay = currentLang === "fr" ? "Inconnu" : "unknown";
        } else {
          const categoryKey = `pestType${
            pestDisease.category?.charAt(0).toUpperCase() +
            pestDisease.category?.slice(1).toLowerCase()
          }`;
          categoryDisplay = t(
            categoryKey,
            escapeHtml(pestDisease.category || t("na", "N/A"))
          );
        }

        pestDiv.innerHTML = `<div class="pest-disease-main"><div class="farm-pest-disease-header"><strong><span class="severity-indicator ${severityClass}"></span>${escapeHtml(
          pestDisease.name
        )} (${categoryDisplay})</strong><p>${t(
          "severityLabel",
          "Severity:"
        )} ${severityText} | ${t("actionLabel", "Action:")} ${actionText}</p>${
          pestDisease.observations
            ? `<p style="font-size: 0.85em; color: #666;"><i>${t(
                "reportObsLabel",
                "Obs:"
              )} ${escapeHtml(pestDisease.observations)}</i></p>`
            : ""
        }</div><div class="list-item-actions"><button class="details-btn" data-translate-title="detailsBtnTitle" title="${t(
          "detailsBtnTitle",
          "Details"
        )}"><i class="fas fa-info-circle"></i></button><button class="edit-btn" data-translate-title="editBtnTitle" title="${t(
          "editBtnTitle",
          "Edit"
        )}"><i class="fas fa-edit"></i></button><button class="delete-btn" data-translate-title="deleteBtnTitle" title="${t(
          "deleteBtnTitle",
          "Delete"
        )}"><i class="fas fa-trash-alt"></i></button><button data-translate-title="addTreatmentBtnTitle" title="${t(
          "addTreatmentBtnTitle",
          "Add Treatment"
        )}"><i class="fas fa-plus"></i> <i class="fas fa-spray-can"></i></button></div></div>`;
        const treatmentsForThisPest = allTreatments.filter(
          (treat) => treat && treat.pestDiseaseId === pestDisease.id
        );
        if (treatmentsForThisPest.length > 0) {
          const pestTreatmentSectionContainer = document.createElement("div");
          pestTreatmentSectionContainer.classList.add(
            "pest-treatments-section"
          );
          pestTreatmentSectionContainer.id = `pest-${pestDisease.id}-treatments`;
          const upcomingTreatmentsForPest = treatmentsForThisPest.filter(
            (treat) =>
              treat &&
              !treat.scheduleLater &&
              treat.date &&
              treat.status !== "completed" &&
              !isPast(treat)
          );
          const pastTreatmentsForPest = treatmentsForThisPest.filter(
            (treat) =>
              treat &&
              !treat.scheduleLater &&
              treat.date &&
              (treat.status === "completed" || isPast(treat))
          );
          const toBeScheduledTreatments = treatmentsForThisPest.filter(
            (treat) => treat && (treat.scheduleLater || !treat.date)
          );
          const upcomingSectionDiv = document.createElement("div");
          upcomingSectionDiv.classList.add("pest-upcoming-section");
          upcomingSectionDiv.innerHTML = `<h4 class="pest-upcoming-toggle" data-pest-id="${
            pestDisease.id
          }"><i class="fas fa-caret-right toggle-icon"></i> ${t(
            "planningTreatmentsHeader",
            "Treatments"
          )} (${
            treatmentsForThisPest.length
          })</h4><div class="pest-upcoming-treatments" id="pest-${
            pestDisease.id
          }-upcoming" style="display: none;"></div>`;
          const upcomingListContainer = upcomingSectionDiv.querySelector(
            ".pest-upcoming-treatments"
          );
          if (!upcomingListContainer) {
            console.error(
              `Could not find upcoming list container for pest ${pestDisease.id}`
            );
            return;
          }
          if (toBeScheduledTreatments.length > 0) {
            upcomingListContainer.insertAdjacentHTML(
              "beforeend",
              `<h5 style="font-size:0.9em; margin-bottom: 5px; margin-top:0; color:#555;">${t(
                "planningToBeScheduledHeader",
                "To Be Scheduled:"
              )}</h5>`
            );
            toBeScheduledTreatments
              .sort((a, b) =>
                (a.productName || "").localeCompare(b.productName || "")
              )
              .forEach((treatment) => {
                const itemDiv = renderNestedTreatmentItem(treatment);
                if (itemDiv) upcomingListContainer.appendChild(itemDiv);
              });
            upcomingListContainer.insertAdjacentHTML(
              "beforeend",
              '<hr style="margin: 10px 0; border-color: #dbe7f5;">'
            );
          }
          if (upcomingTreatmentsForPest.length > 0) {
            upcomingListContainer.insertAdjacentHTML(
              "beforeend",
              `<h5 style="font-size:0.9em; margin-bottom: 5px; margin-top:5px; color:#555;">${t(
                "planningUpcomingHeader",
                "Upcoming:"
              )}</h5>`
            );
            upcomingTreatmentsForPest
              .sort((a, b) => {
                try {
                  return (
                    new Date(`${a.date}T${a.time || "00:00"}`) -
                    new Date(`${b.date}T${b.time || "00:00"}`)
                  );
                } catch {
                  return 0;
                }
              })
              .forEach((treatment) => {
                const itemDiv = renderNestedTreatmentItem(treatment);
                if (itemDiv) upcomingListContainer.appendChild(itemDiv);
              });
          } else if (toBeScheduledTreatments.length === 0) {
            upcomingListContainer.insertAdjacentHTML(
              "beforeend",
              `<p style="font-style: italic; font-size: 0.9em; color: #666; margin-bottom: 10px;">${t(
                "planningNoUpcomingMsg",
                "No upcoming or unscheduled treatments linked."
              )}</p>`
            );
          }
          if (pastTreatmentsForPest.length > 0) {
            const pastSectionDiv = document.createElement("div");
            pastSectionDiv.classList.add("pest-past-section");
            pastSectionDiv.innerHTML = `<button class="view-pest-past-treatments-btn" data-pest-id="${
              pestDisease.id
            }">${t("planningViewPastBtn", "View Past Treatments")} (${
              pastTreatmentsForPest.length
            })</button><div class="pest-past-treatments" id="pest-${
              pestDisease.id
            }-past" style="display: none;"></div>`;
            upcomingListContainer.appendChild(pastSectionDiv);
          }
          pestTreatmentSectionContainer.appendChild(upcomingSectionDiv);
          pestDiv.appendChild(pestTreatmentSectionContainer);
        } else {
          const noTreatmentsNote = document.createElement("p");
          noTreatmentsNote.style.cssText =
            "font-size: 0.85em; color: #666; margin-top: 5px; font-style: italic;";
          noTreatmentsNote.textContent = t(
            "planningNoTreatmentsLinked",
            "No treatments linked to this pest yet."
          );
          pestDiv.appendChild(noTreatmentsNote);
        }
        pestListDiv.appendChild(pestDiv);
      });
      pestContentDiv.appendChild(pestListDiv);
      farmPestContainer.appendChild(pestContentDiv);
      farmDiv.appendChild(farmPestContainer);
    } else {
      const noPestsNote = document.createElement("p");
      noPestsNote.style.cssText =
        "font-size: 0.9em; color: #555; margin-top: 10px; width: 100%; text-align: left; clear: both; padding-top: 5px; padding-left: 10px;";
      noPestsNote.textContent = t(
        "planningNoPestsMsg",
        "No pests or diseases recorded for this farm yet."
      );
      farmDiv.appendChild(noPestsNote);
    }
    farmListContainer.appendChild(farmDiv);
  });
  populateFarmDropdowns();
}
function showFarmDetails(farmId) {
  const farm = getLocalStorage("farms").find((f) => f && f.id === farmId);
  const modal = document.getElementById("farmDetailsModal");
  const content = document.getElementById("farmDetailsContent");
  if (!farm || !modal || !content) {
    alert("Could not retrieve farm details.");
    console.error(`Farm details not found for ID: ${farmId}`);
    return;
  }
  const size =
    typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
      ? `${formatNumberLocale(farm.farmSize)} ha`
      : translations[currentLang]?.na || "N/A";
  const plantingDate = farm.plantingDate
    ? formatDateLocale(farm.plantingDate)
    : translations[currentLang]?.na || "N/A";
  const harvestDate = farm.harvestDate
    ? formatDateLocale(farm.harvestDate)
    : translations[currentLang]?.na || "N/A";
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const translatedFarmCrop =
    translations[currentLang]?.[farm.crop] ||
    escapeHtml(farm.crop || t("na", "N/A"));

  content.innerHTML = `
        <p><strong>${t("farmDetailsNameLabel", "Name:")}</strong> ${escapeHtml(
    farm.name
  )}</p>
        <p><strong>${t(
          "farmDetailsLocationLabel",
          "Location:"
        )}</strong> ${escapeHtml(farm.location || t("na", "N/A"))}</p>
        <p><strong>${t(
          "farmDetailsSizeLabel",
          "Size (ha):"
        )}</strong> ${size}</p>
        <p><strong>${t(
          "farmDetailsCropLabel",
          "Crop:"
        )}</strong> ${translatedFarmCrop}</p>
        <p><strong>${t(
          "farmDetailsPlantingLabel",
          "Planting Date:"
        )}</strong> ${plantingDate}</p>
        <p><strong>${t(
          "farmDetailsHarvestLabel",
          "Expected Harvest:"
        )}</strong> ${harvestDate}</p>`;
  modal.style.zIndex = BASE_MODAL_ZINDEX + 5;
  modal.style.display = "block";
}
function editFarm(farmId) {
  const farm = getLocalStorage("farms").find((f) => f && f.id === farmId);
  const modal = document.getElementById("farmModal");
  if (!farm || !modal) {
    alert("Could not load farm for editing.");
    console.error(`Farm data not found for editing ID: ${farmId}`);
    return;
  }
  currentFarmId = farmId;
  const form = modal.querySelector("#farmForm");
  if (!form) {
    console.error("Farm form not found inside modal.");
    return;
  }
  form.reset();
  const nameInput = form.querySelector("#farmName");
  const locationInput = form.querySelector("#farmLocation");
  const sizeInput = form.querySelector("#farmSize");
  const cropSelect = form.querySelector("#crop");
  const plantingInput = form.querySelector("#farmPlantingDate");
  const harvestInput = form.querySelector("#farmHarvestDate");

  if (nameInput) nameInput.value = farm.name;
  if (locationInput) locationInput.value = farm.location || "";
  if (sizeInput)
    sizeInput.value =
      typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
        ? farm.farmSize
        : "";
  if (cropSelect) cropSelect.value = farm.crop || "";
  if (plantingInput) plantingInput.value = farm.plantingDate || "";
  if (harvestInput) harvestInput.value = farm.harvestDate || "";

  modal.style.zIndex = BASE_MODAL_ZINDEX;
  modal.style.display = "block";
  nameInput?.focus();
}
function confirmDeleteFarm(farmId) {
  const modal = document.getElementById("deleteFarmConfirmModal");
  const farm = getLocalStorage("farms").find((f) => f && f.id === farmId);
  if (modal && farm) {
    const heading = modal.querySelector("h2");
    const defaultTitle =
      translations[currentLang]?.deleteFarmConfirmTitle ||
      "Are you sure you want to delete this farm (and all its associated pests/treatments)?";
    const nameTitle =
      translations[currentLang]?.deleteFarmConfirmTitleWithName?.replace(
        "{farmName}",
        escapeHtml(farm.name)
      ) || defaultTitle;
    if (heading) heading.textContent = nameTitle;
    modal.dataset.farmIdToDelete = farmId;
    modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
    modal.style.display = "block";
  } else if (!farm) {
    console.error("Cannot confirm delete: Farm not found for ID", farmId);
    alert("Farm not found. Cannot delete.");
  } else {
    console.error("Delete farm confirmation modal not found.");
  }
}
function handleDeleteFarm() {
  const modal = document.getElementById("deleteFarmConfirmModal");
  if (!modal || !modal.dataset.farmIdToDelete) return;
  const farmIdToDelete = parseInt(modal.dataset.farmIdToDelete);
  if (!farmIdToDelete) return;
  let farms = getLocalStorage("farms");
  const farmToDelete = farms.find((f) => f?.id === farmIdToDelete);
  farms = farms.filter((f) => f && f.id !== farmIdToDelete);
  setLocalStorage("farms", farms);
  let pests = getLocalStorage("pestsDiseases");
  const pestIdsToDelete = pests
    .filter((p) => p && p.farmId === farmIdToDelete)
    .map((p) => p.id);
  pests = pests.filter((p) => p && p.farmId !== farmIdToDelete);
  setLocalStorage("pestsDiseases", pests);
  let treatments = getLocalStorage("treatments");
  const treatmentsBeingDeleted = [];
  treatments = treatments.filter((t) => {
    if (!t) return false;
    const shouldDelete =
      t.farmId === farmIdToDelete ||
      (t.pestDiseaseId && pestIdsToDelete.includes(t.pestDiseaseId));
    if (shouldDelete) {
      treatmentsBeingDeleted.push(t);
      return false;
    }
    return true;
  });
  treatmentsBeingDeleted.forEach((t) => {
    if (activeTimeouts[t.id]) clearTimeout(activeTimeouts[t.id]);
    delete activeTimeouts[t.id];
  });
  setLocalStorage("treatments", treatments);
  closeModal(modal);
  renderFarmList();
  populateFarmDropdowns();
  generateReport();
  renderCalendar();
  renderSupplyList();
  scheduleNotifications();
  console.log(
    `Deleted Farm: "${
      farmToDelete?.name || "ID " + farmIdToDelete
    }". Associated pests (${pestIdsToDelete.length}) and treatments (${
      treatmentsBeingDeleted.length
    }) also removed.`
  );
}
function renderNestedTreatmentItem(treatment) {
  if (!treatment || !treatment.id) {
    console.warn(
      "Attempted to render invalid nested treatment item:",
      treatment
    );
    return null;
  }
  const itemDiv = document.createElement("div");
  const statusClass = getTreatmentStatusClass(treatment);
  itemDiv.classList.add("nested-treatment-item");
  if (statusClass) itemDiv.classList.add(statusClass);
  itemDiv.dataset.treatmentId = treatment.id;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const productName =
    treatment.productName ||
    t("treatmentDetailsProductNone", "Other (Not Listed)");
  let displayString = "";
  if (treatment.scheduleLater || !treatment.date) {
    displayString = `${escapeHtml(productName)} - ${t(
      "treatmentDetailsDateTimeUnscheduled",
      "To be scheduled"
    )}`;
  } else {
    const formattedDate = formatDateLocale(treatment.date);
    const formattedTime = formatTimeLocale(treatment.time, treatment.date);
    displayString = `${escapeHtml(
      productName
    )} - ${formattedDate} | ${formattedTime}`;
  }
  let showCompletionButtons = !treatment.scheduleLater && treatment.date;
  let completionButtonHTML = "";
  if (showCompletionButtons) {
    const completeTitle = t("markCompleteBtnTitle", "Mark as Completed");
    const unmarkTitle = t("unmarkCompleteBtnTitle", "Unmark Completed");
    completionButtonHTML =
      treatment.status === "completed"
        ? `<button class="unmark-btn" data-translate-title="unmarkCompleteBtnTitle" title="${unmarkTitle}"><i class="fas fa-undo"></i></button>`
        : `<button class="complete-btn" data-translate-title="markCompleteBtnTitle" title="${completeTitle}"><i class="fas fa-check"></i></button>`;
  }
  itemDiv.innerHTML = `<span>${displayString}</span><div class="list-item-actions">${completionButtonHTML}<button class="details-btn" data-translate-title="detailsBtnTitle" title="${t(
    "detailsBtnTitle",
    "Details"
  )}"><i class="fas fa-info-circle"></i></button><button class="edit-btn" data-translate-title="editBtnTitle" title="${t(
    "editBtnTitle",
    "Edit"
  )}"><i class="fas fa-edit"></i></button><button class="delete-btn" data-translate-title="deleteBtnTitle" title="${t(
    "deleteBtnTitle",
    "Delete"
  )}"><i class="fas fa-trash-alt"></i></button></div>`;
  return itemDiv;
}

// --- Pest & Disease Section ---
function togglePestNameInput() {
  const checkbox = document.getElementById("pestDiseaseNotInList");
  const select = document.getElementById("pestDiseaseNameSelect");
  const customInput = document.getElementById("pestDiseaseNameCustom");
  if (!checkbox || !select || !customInput) {
    console.error("Pest name form elements missing for toggling.");
    return;
  }
  if (checkbox.checked) {
    select.style.display = "none";
    select.required = false;
    select.value = "";
    customInput.style.display = "block";
    customInput.required = true;
    customInput.focus();
  } else {
    customInput.style.display = "none";
    customInput.required = false;
    customInput.value = "";
    select.style.display = "block";
    select.required = true;
    select.value = "";
  }
}
function toggleDiagnoseMessage() {
  const categorySelect = document.getElementById("pestDiseaseCategory");
  const diagnoseMessage = document.getElementById("diagnoseMessage");
  if (!categorySelect || !diagnoseMessage) {
    console.error("Pest category select or diagnose message element missing.");
    return;
  }
  diagnoseMessage.style.display =
    categorySelect.value === "unknown" ? "block" : "none";
}
function populateCropDropdown(farmId, cropSelectElementId = "pestDiseaseCrop") {
  const cropSelect = document.getElementById(cropSelectElementId);
  if (!cropSelect) {
    console.error(`Crop select element #${cropSelectElementId} not found.`);
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  cropSelect.innerHTML = `<option value="">${t(
    "cropFromFarmPlaceholder",
    "Crop from selected farm"
  )}</option>`;
  cropSelect.disabled = true;

  if (!farmId) return;

  const farms = getLocalStorage("farms");
  const selectedFarm = farms.find((f) => f && f.id === parseInt(farmId));

  if (selectedFarm && selectedFarm.crop) {
    cropSelect.innerHTML = "";
    const option = document.createElement("option");
    option.value = selectedFarm.crop;
    option.textContent = t(selectedFarm.crop, escapeHtml(selectedFarm.crop));
    option.selected = true;
    cropSelect.appendChild(option);
  } else if (selectedFarm) {
    cropSelect.innerHTML = `<option value="">${t(
      "cropNotDefinedOnFarm",
      "Farm has no crop specified"
    )}</option>`;
  } else {
    cropSelect.innerHTML = `<option value="">${t(
      "cropFarmError",
      "Error finding farm data"
    )}</option>`;
  }
}
function openAddPestDiseaseModal(farmId = null) {
  const modal = document.getElementById("pestDiseaseModal");
  const form = document.getElementById("pestDiseaseForm");
  const farmSelect = document.getElementById("pestDiseaseFarmId");
  const cropSelect = document.getElementById("pestDiseaseCrop");
  const nameSelect = form.querySelector("#pestDiseaseNameSelect");
  const notInListCheck = form.querySelector("#pestDiseaseNotInList");
  const nameCustom = form.querySelector("#pestDiseaseNameCustom");
  const categorySelect = form.querySelector("#pestDiseaseCategory");
  const diagnoseMsg = form.querySelector("#diagnoseMessage");

  if (
    !modal ||
    !form ||
    !farmSelect ||
    !cropSelect ||
    !nameSelect ||
    !notInListCheck ||
    !nameCustom ||
    !categorySelect ||
    !diagnoseMsg
  ) {
    console.error("Pest/Disease modal or one of its form elements not found!");
    return;
  }
  currentPestDiseaseId = null;
  form.reset();
  categorySelect.value = "Disease";
  form.querySelector("#severity").value = "none";
  form.querySelector("#action").value = "monitor";
  nameSelect.value = "";
  nameSelect.style.display = "block";
  nameSelect.required = true;
  notInListCheck.checked = false;
  nameCustom.style.display = "none";
  nameCustom.required = false;
  nameCustom.value = "";
  diagnoseMsg.style.display = "none";

  populateFarmDropdowns("pestDiseaseFarmId");
  populateCropDropdown(null);

  if (farmId) {
    const farmExists = Array.from(farmSelect.options).some(
      (opt) => opt.value == farmId
    );
    if (farmExists) {
      farmSelect.value = farmId;
      farmSelect.disabled = true;
      populateCropDropdown(farmId);
    } else {
      console.warn(
        `Farm ID ${farmId} provided but not found in dropdown. Allowing selection.`
      );
      farmSelect.value = "";
      farmSelect.disabled = false;
    }
  } else {
    farmSelect.value = "";
    farmSelect.disabled = false;
  }
  modal.style.zIndex = BASE_MODAL_ZINDEX;
  modal.style.display = "block";
  nameSelect.focus();
}
function handlePestFarmChange(event) {
  const farmId = event.target.value;
  populateCropDropdown(farmId, "pestDiseaseCrop");
}
function handlePestDiseaseSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const nameSelect = form.querySelector("#pestDiseaseNameSelect");
  const notInListCheck = form.querySelector("#pestDiseaseNotInList");
  const nameCustom = form.querySelector("#pestDiseaseNameCustom");
  const categorySelect = form.querySelector("#pestDiseaseCategory");
  const severitySelect = form.querySelector("#severity");
  const actionSelect = form.querySelector("#action");
  const observationsInput = form.querySelector("#observations");
  const farmSelect = form.querySelector("#pestDiseaseFarmId");
  let pestDiseaseName = "";
  if (notInListCheck.checked) {
    pestDiseaseName = nameCustom.value.trim();
    if (!pestDiseaseName) {
      alert(
        translations[currentLang]?.pestCustomNameError ||
          "Please enter the custom Pest/Disease Name."
      );
      nameCustom.focus();
      return;
    }
  } else {
    pestDiseaseName = nameSelect.value;
    if (!pestDiseaseName) {
      alert(
        translations[currentLang]?.pestSelectNameError ||
          "Please select a Pest/Disease Name from the list."
      );
      nameSelect.focus();
      return;
    }
  }
  const category = categorySelect.value;
  const severity = severitySelect.value;
  const action = actionSelect.value;
  const observations = observationsInput.value.trim();
  let farmIdToSave;
  if (currentPestDiseaseId) {
    const originalPest = getLocalStorage("pestsDiseases").find(
      (p) => p && p.id === currentPestDiseaseId
    );
    if (!originalPest) {
      console.error(
        "Original pest not found during edit save:",
        currentPestDiseaseId
      );
      alert(
        translations[currentLang]?.pestEditSaveError ||
          "Error saving changes. Original pest record not found."
      );
      return;
    }
    farmIdToSave = originalPest.farmId;
  } else {
    farmIdToSave = parseInt(farmSelect.value);
    if (!farmIdToSave || isNaN(farmIdToSave)) {
      alert(
        translations[currentLang]?.pestFarmRequiredError ||
          "A valid associated Farm is required."
      );
      farmSelect.focus();
      return;
    }
  }
  const planningDropdownContent = document
    .getElementById("farmList")
    ?.closest(".dropdown-content");
  const wasPlanningOpen =
    planningDropdownContent &&
    planningDropdownContent.style.display === "block";
  let openFarmPestSectionId = null;
  if (wasPlanningOpen && planningDropdownContent) {
    const openPestSection = planningDropdownContent.querySelector(
      '.pest-section-content[style*="block"]'
    );
    if (openPestSection) {
      openFarmPestSectionId = openPestSection.id;
    }
  }
  const pestDiseaseData = {
    name: pestDiseaseName,
    category: category,
    severity: severity,
    action: action,
    observations: observations,
    farmId: farmIdToSave
  };
  let pests = getLocalStorage("pestsDiseases");
  if (currentPestDiseaseId) {
    let found = false;
    pests = pests.map((pd) => {
      if (pd && pd.id === currentPestDiseaseId) {
        found = true;
        return { ...pd, ...pestDiseaseData };
      }
      return pd;
    });
    if (!found)
      console.error("Pest/Disease ID to edit not found:", currentPestDiseaseId);
  } else {
    pestDiseaseData.id = Date.now();
    pests.push(pestDiseaseData);
  }
  setLocalStorage("pestsDiseases", pests);
  closeModal(document.getElementById("pestDiseaseModal"));
  const farmSelectElement = form.querySelector("#pestDiseaseFarmId");
  if (farmSelectElement) farmSelectElement.disabled = false;
  renderFarmList();
  generateReport();
  if (wasPlanningOpen && planningDropdownContent) {
    const newPlanningDropdownContent = document
      .getElementById("farmList")
      ?.closest(".dropdown-content");
    if (newPlanningDropdownContent) {
      newPlanningDropdownContent.style.display = "block";
      if (openFarmPestSectionId) {
        const farmIdMatch = openFarmPestSectionId.match(
          /farm-(\d+)-pests-content/
        );
        const targetFarmId = farmIdMatch ? farmIdMatch[1] : null;
        if (targetFarmId) {
          const farmPestToggle = newPlanningDropdownContent.querySelector(
            `.pest-section-toggle[data-farm-id="${targetFarmId}"]`
          );
          const farmPestContent = document.getElementById(
            openFarmPestSectionId
          );
          const farmPestIcon = farmPestToggle?.querySelector(".toggle-icon");
          if (farmPestToggle && farmPestContent && farmPestIcon) {
            farmPestContent.style.display = "block";
            farmPestIcon.classList.remove("fa-caret-right");
            farmPestIcon.classList.add("fa-caret-down", "open");
            farmPestToggle.scrollIntoView({
              behavior: "auto",
              block: "nearest"
            });
          } else {
            console.warn(
              "Could not find elements to restore pest section state for farm ID:",
              targetFarmId
            );
          }
        }
      }
    }
  }
}
function showPestDiseaseDetails(pestDiseaseId) {
  const pestDisease = getLocalStorage("pestsDiseases").find(
    (p) => p && p.id === pestDiseaseId
  );
  const farms = getLocalStorage("farms");
  const modal = document.getElementById("pestDiseaseDetailsModal");
  const content = document.getElementById("pestDiseaseDetailsContent");

  if (!pestDisease || !modal || !content) {
    alert(
      translations[currentLang]?.treatmentNotFound ||
        "Pest/Disease details not found."
    );
    console.error(`Pest/Disease details not found for ID: ${pestDiseaseId}`);
    return;
  }

  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const farm = farms.find((f) => f && f.id === pestDisease.farmId);
  const farmName = farm
    ? escapeHtml(farm.name)
    : t("farmDetailsTitle", "Unknown Farm");
  const farmCropValue = farm ? farm.crop : null;
  const translatedFarmCrop =
    translations[currentLang]?.[farmCropValue] ||
    escapeHtml(farmCropValue || t("na", "N/A"));

  const severityClass = escapeHtml(
    pestDisease.severity?.toLowerCase() || "none"
  );
  const severityText = t(
    `severity${
      pestDisease.severity?.charAt(0).toUpperCase() +
        pestDisease.severity?.slice(1).toLowerCase() || "None"
    }`,
    pestDisease.severity || "N/A"
  );
  const actionText = t(
    `action${
      pestDisease.action?.charAt(0).toUpperCase() +
        pestDisease.action?.slice(1).toLowerCase() || "None"
    }`,
    pestDisease.action || "N/A"
  );

  let categoryTextDisplay;
  if (pestDisease.category === "unknown") {
    categoryTextDisplay = currentLang === "fr" ? "Inconnu" : "unknown";
  } else {
    categoryTextDisplay = t(
      `pestType${
        pestDisease.category?.charAt(0).toUpperCase() +
          pestDisease.category?.slice(1).toLowerCase() || "Other"
      }`,
      pestDisease.category || "N/A"
    );
  }

  content.innerHTML = `
        <p><strong>${t(
          "pestDetailsFarmLabel",
          "Farm:"
        )}</strong> ${farmName}</p>
        <p><strong>${t(
          "pestDetailsCropLabel",
          "Crop:"
        )}</strong> ${translatedFarmCrop}</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
        <p><strong>${t("pestDetailsNameLabel", "Name:")}</strong> ${escapeHtml(
    pestDisease.name
  )}</p>
        <p><strong>${t(
          "pestDetailsTypeLabel",
          "Type:"
        )}</strong> ${categoryTextDisplay}</p>
        <p><strong>${t(
          "pestDetailsSeverityLabel",
          "Severity:"
        )}</strong> <span class="severity-indicator ${severityClass}"></span> ${severityText}</p>
        <p><strong>${t(
          "pestDetailsActionLabel",
          "Action:"
        )}</strong> ${actionText}</p>
        <p><strong>${t(
          "pestDetailsObsLabel",
          "Observations:"
        )}</strong> ${escapeHtml(
    pestDisease.observations || t("na", "N/A")
  )}</p>`;

  modal.style.zIndex = BASE_MODAL_ZINDEX + 5;
  modal.style.display = "block";
}
function editPestDisease(pestDiseaseId) {
  const pestDisease = getLocalStorage("pestsDiseases").find(
    (p) => p && p.id === pestDiseaseId
  );
  const modal = document.getElementById("pestDiseaseModal");
  const form = document.getElementById("pestDiseaseForm");
  const nameSelect = form.querySelector("#pestDiseaseNameSelect");
  const notInListCheck = form.querySelector("#pestDiseaseNotInList");
  const nameCustom = form.querySelector("#pestDiseaseNameCustom");
  const categorySelect = form.querySelector("#pestDiseaseCategory");
  const diagnoseMsg = form.querySelector("#diagnoseMessage");
  const farmSelect = form.querySelector("#pestDiseaseFarmId");

  if (
    !pestDisease ||
    !modal ||
    !form ||
    !nameSelect ||
    !notInListCheck ||
    !nameCustom ||
    !categorySelect ||
    !diagnoseMsg ||
    !farmSelect
  ) {
    alert("Could not load pest/disease for editing.");
    console.error(
      `Pest/Disease data or form elements not found for editing ID: ${pestDiseaseId}`
    );
    return;
  }
  currentPestDiseaseId = pestDiseaseId;
  form.reset();
  populateFarmDropdowns("pestDiseaseFarmId");
  farmSelect.value = pestDisease.farmId || "";
  farmSelect.disabled = true;
  populateCropDropdown(pestDisease.farmId);
  categorySelect.value = pestDisease.category || "Disease";
  form.querySelector("#severity").value = pestDisease.severity || "none";
  form.querySelector("#action").value = pestDisease.action || "none";
  form.querySelector("#observations").value = pestDisease.observations || "";

  const savedName = pestDisease.name;
  let nameInDropdown = false;
  const savedNameLower = savedName.toLowerCase();
  for (let i = 0; i < nameSelect.options.length; i++) {
    if (nameSelect.options[i].value.toLowerCase() === savedNameLower) {
      nameInDropdown = true;
      nameSelect.value = nameSelect.options[i].value;
      break;
    }
  }
  if (nameInDropdown) {
    notInListCheck.checked = false;
    nameCustom.style.display = "none";
    nameCustom.required = false;
    nameCustom.value = "";
    nameSelect.style.display = "block";
    nameSelect.required = true;
  } else {
    nameSelect.value = "";
    notInListCheck.checked = true;
    nameCustom.value = savedName;
    nameCustom.style.display = "block";
    nameCustom.required = true;
    nameSelect.style.display = "none";
    nameSelect.required = false;
  }
  toggleDiagnoseMessage();
  modal.style.zIndex = BASE_MODAL_ZINDEX;
  modal.style.display = "block";
  if (notInListCheck.checked) {
    nameCustom.focus();
  } else {
    nameSelect.focus();
  }
}
function confirmDeletePestDisease(pestDiseaseId) {
  const modal = document.getElementById("deletePestDiseaseConfirmModal");
  const pest = getLocalStorage("pestsDiseases").find(
    (p) => p && p.id === pestDiseaseId
  );
  if (modal && pest) {
    const heading = modal.querySelector("h2");
    const defaultTitle =
      translations[currentLang]?.deletePestConfirmTitle ||
      "Are you sure you want to delete this Pest/Disease (and its associated treatments)?";
    const nameTitle =
      translations[currentLang]?.deletePestConfirmTitleWithName?.replace(
        "{pestName}",
        escapeHtml(pest.name)
      ) || defaultTitle;
    if (heading) heading.textContent = nameTitle;
    modal.dataset.pestDiseaseIdToDelete = pestDiseaseId;
    modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
    modal.style.display = "block";
  } else if (!pest) {
    alert("Pest/Disease not found. Cannot delete.");
    console.error(
      "Cannot confirm delete: Pest/Disease not found for ID",
      pestDiseaseId
    );
  } else {
    console.error("Delete Pest/Disease confirmation modal not found.");
  }
}
function handleDeletePestDisease() {
  const modal = document.getElementById("deletePestDiseaseConfirmModal");
  if (!modal || !modal.dataset.pestDiseaseIdToDelete) return;
  const pestDiseaseIdToDelete = parseInt(modal.dataset.pestDiseaseIdToDelete);
  if (!pestDiseaseIdToDelete) return;
  let pests = getLocalStorage("pestsDiseases");
  const pestToDelete = pests.find((p) => p?.id === pestDiseaseIdToDelete);
  pests = pests.filter((pd) => pd && pd.id !== pestDiseaseIdToDelete);
  setLocalStorage("pestsDiseases", pests);
  let treatments = getLocalStorage("treatments");
  const treatmentsBeingDeleted = [];
  treatments = treatments.filter((t) => {
    if (t && t.pestDiseaseId === pestDiseaseIdToDelete) {
      treatmentsBeingDeleted.push(t);
      return false;
    }
    return true;
  });
  treatmentsBeingDeleted.forEach((t) => {
    if (activeTimeouts[t.id]) clearTimeout(activeTimeouts[t.id]);
    delete activeTimeouts[t.id];
  });
  setLocalStorage("treatments", treatments);
  closeModal(modal);
  renderFarmList();
  generateReport();
  renderCalendar();
  renderSupplyList();
  scheduleNotifications();
  console.log(
    `Deleted Pest/Disease: "${
      pestToDelete?.name || "ID " + pestDiseaseIdToDelete
    }". Associated treatments (${treatmentsBeingDeleted.length}) also removed.`
  );
}

// --- Treatment Section ---
function handleProductSelectionChange() {
  const productSelect = document.getElementById("treatmentProductNameSelect");
  const previewBox = document.getElementById("productDetailsPreview");
  const rateSpan = document.getElementById("productDetailRate");
  const timeSpan = document.getElementById("productDetailTime");
  const freqSpan = document.getElementById("productDetailFrequency");
  const moreLink = document.getElementById("productDetailMoreLink");
  const productSearchSuggestion = document.getElementById(
    "productSearchSuggestion"
  );
  if (
    !productSelect ||
    !previewBox ||
    !rateSpan ||
    !timeSpan ||
    !freqSpan ||
    !moreLink ||
    !productSearchSuggestion
  ) {
    console.error(
      "One or more product preview or suggestion elements not found."
    );
    return;
  }
  const selectedProductName = productSelect.value;
  productSearchSuggestion.style.display = selectedProductName
    ? "none"
    : "block";
  if (selectedProductName) {
    const products = getProducts();
    const productDetails = products.find((p) => p.name === selectedProductName);
    if (productDetails) {
      rateSpan.textContent = escapeHtml(productDetails.rate || "N/A");
      timeSpan.textContent = escapeHtml(productDetails.time || "N/A");
      freqSpan.textContent = escapeHtml(productDetails.frequency || "N/A");
      moreLink.href = productDetails.url || "#";
      moreLink.style.display = productDetails.url ? "block" : "none";
      previewBox.style.display = "block";
    } else {
      previewBox.style.display = "none";
      console.warn(
        `Details not found for selected product: ${selectedProductName}`
      );
    }
  } else {
    previewBox.style.display = "none";
  }
  updateProductFieldStates();
  calculateTreatmentQuantities();
}
function handleNoneProductCheckboxChange() {
  const checkbox = document.getElementById("treatmentNoneProductListed");
  const productSelect = document.getElementById("treatmentProductNameSelect");
  const warningDiv = document.getElementById("treatmentNoneProductWarning");
  const productWarningEl = document.getElementById("treatmentProductWarning");
  const previewBox = document.getElementById("productDetailsPreview");
  if (
    !checkbox ||
    !productSelect ||
    !warningDiv ||
    !productWarningEl ||
    !previewBox
  ) {
    console.error(
      "Required elements for 'None Product' checkbox change not found."
    );
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  warningDiv.innerHTML = ` <span data-translate="noneProductWarn1">${t(
    "noneProductWarn1",
    "Product-specific fields will be disabled."
  )}</span><br> <span style="font-style: italic;" data-translate="noneProductWarn2">${t(
    "noneProductWarn2",
    "If you use other products, please only use those that are legally permitted."
  )}</span> `;
  if (checkbox.checked) {
    productSelect.disabled = true;
    productSelect.value = "";
    productWarningEl.style.display = "none";
    previewBox.style.display = "none";
  } else {
    productSelect.disabled = false;
  }
  updateProductFieldStates();
  calculateTreatmentQuantities();
}
function updateProductFieldStates() {
  const noneChecked = document.getElementById("treatmentNoneProductListed")
    .checked;
  const productSelected =
    document.getElementById("treatmentProductNameSelect").value !== "";
  const noneWarningDiv = document.getElementById("treatmentNoneProductWarning");
  const elements = getTreatmentModalInputs();
  if (!elements) return;
  const productDependentFields = [
    elements.doseInput,
    elements.doseUnitSelect,
    elements.totalSurfaceInput
  ];
  const calculatedFields = [
    elements.quantityPerHaOutput,
    elements.totalQuantityNeededOutput
  ];
  const shouldBeActive = !noneChecked && productSelected;
  productDependentFields.forEach((el) => {
    if (el) el.disabled = !shouldBeActive;
  });
  if (noneWarningDiv)
    noneWarningDiv.style.display = noneChecked ? "block" : "none";
  if (!shouldBeActive) {
    productDependentFields.forEach((el) => {
      if (el) el.value = "";
    });
    calculatedFields.forEach((el) => {
      if (el) el.value = "N/A";
    });
    if (elements.doseUnitSelect) elements.doseUnitSelect.value = "";
    document.getElementById("treatmentDoseWarning").style.display = "none";
    document.getElementById("treatmentUnitWarning").style.display = "none";
    const previewBox = document.getElementById("productDetailsPreview");
    if (previewBox) previewBox.style.display = "none";
  } else {
    if (
      elements.totalSurfaceInput &&
      elements.totalSurfaceInput.value === "" &&
      currentModalFarmSize !== null
    ) {
      elements.totalSurfaceInput.value = currentModalFarmSize;
      handleSurfaceAreaInput(elements.totalSurfaceInput);
    }
    if (elements.doseUnitSelect && elements.doseUnitSelect.value === "") {
      elements.doseUnitSelect.selectedIndex = 0;
    }
  }
  updateContextFieldState();
}
function updateContextFieldState() {
  const elements = getTreatmentModalInputs();
  if (
    !elements ||
    !elements.doseUnitSelect ||
    !elements.appContextTypeSelect ||
    !elements.appContextValueInput
  )
    return;
  const {
    doseUnitSelect,
    appContextTypeSelect,
    appContextValueInput,
    multiplierWarningDiv
  } = elements;
  const contextWarning = document.getElementById("treatmentContextWarning");
  const multiplierRequiredSpan = document.getElementById(
    "multiplierFactorRequired"
  );
  const noneChecked = document.getElementById("treatmentNoneProductListed")
    .checked;
  const productSelected =
    document.getElementById("treatmentProductNameSelect").value !== "";
  const productFieldsActive = !noneChecked && productSelected;

  const selectedUnit = doseUnitSelect.value;
  const requiresMultiplier =
    selectedUnit && !selectedUnit.endsWith("/ha") && selectedUnit !== "other";
  const shouldBeEnabled = productFieldsActive && requiresMultiplier;

  appContextTypeSelect.disabled = !shouldBeEnabled;
  appContextValueInput.disabled = !shouldBeEnabled;

  if (multiplierRequiredSpan)
    multiplierRequiredSpan.style.display = shouldBeEnabled ? "inline" : "none";

  if (!shouldBeEnabled) {
    if (!appContextTypeSelect.disabled || !productFieldsActive)
      appContextTypeSelect.value = "";
    if (!appContextValueInput.disabled || !productFieldsActive)
      appContextValueInput.value = "";
    const isPerHa =
      productFieldsActive && selectedUnit && selectedUnit.endsWith("/ha");
    if (contextWarning)
      contextWarning.style.display = isPerHa ? "block" : "none";
    document.getElementById("treatmentMultiplierTypeWarning").style.display =
      "none";
    document.getElementById("treatmentMultiplierValueWarning").style.display =
      "none";
    if (multiplierWarningDiv) multiplierWarningDiv.style.display = "none";
  } else {
    if (contextWarning) contextWarning.style.display = "none";
    let defaultFactor = "";
    if (selectedUnit.endsWith("/applicator")) {
      defaultFactor = "applicators_ha";
    } else if (selectedUnit.endsWith("/plant")) {
      defaultFactor = "plants_ha";
    } else if (selectedUnit.endsWith("/kg")) {
      defaultFactor = "total_weight";
    } else if (selectedUnit.endsWith("/L")) {
      defaultFactor = "total_volume";
    } else if (selectedUnit.endsWith("/unit")) {
      defaultFactor = "units";
    }

    if (
      defaultFactor &&
      (appContextTypeSelect.value === "" ||
        appContextTypeSelect.value !== defaultFactor)
    ) {
      if (
        Array.from(appContextTypeSelect.options).some(
          (opt) => opt.value === defaultFactor
        )
      ) {
        appContextTypeSelect.value = defaultFactor;
        appContextTypeSelect.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      } else {
        console.warn(
          `Default factor "${defaultFactor}" for unit "${selectedUnit}" not found in select options.`
        );
      }
    }
  }
}
function handleSurfaceAreaInput(inputElement) {
  if (!inputElement) return;
  const noteElement = document.getElementById("treatmentSurfaceAreaNote");
  const maxAreaSpan = document.getElementById("treatmentMaxSurfaceArea");
  inputElement.classList.remove("capped-value");
  if (maxAreaSpan) {
    maxAreaSpan.textContent =
      currentModalFarmSize !== null
        ? formatNumberLocale(currentModalFarmSize)
        : "N/A";
  }
  if (
    currentModalFarmSize === null ||
    currentModalFarmSize === undefined ||
    isNaN(currentModalFarmSize) ||
    currentModalFarmSize < 0
  ) {
    return;
  }
  try {
    const currentValue = parseFloat(inputElement.value);
    if (isNaN(currentValue)) return;
    if (currentValue > currentModalFarmSize) {
      inputElement.value = currentModalFarmSize;
      inputElement.classList.add("capped-value");
      console.warn(
        `Surface area capped at farm size: ${currentModalFarmSize} ha`
      );
      calculateTreatmentQuantities();
    } else if (currentValue < 0) {
      inputElement.value = "0";
      calculateTreatmentQuantities();
    }
  } catch (e) {
    console.error("Error parsing surface area value:", e);
  }
}
function handleScheduleLaterCheckboxChange(event) {
  const scheduleLaterCheckbox = event.target;
  handleTreatmentDateTimeInputChange();
}
function handleTreatmentDateTimeInputChange() {
  const dateInput = document.getElementById("treatmentDate");
  const scheduleLaterCheckbox = document.getElementById(
    "treatmentScheduleLater"
  );
  const timeLaterInfo = document.getElementById("treatmentTimeLaterInfo");
  const dateWarningEl = document.getElementById("treatmentDateWarning");
  const timeWarningEl = document.getElementById("treatmentTimeWarning");
  const hour24Select = document.getElementById("treatmentTimeHour24");
  const minute24Select = document.getElementById("treatmentTimeMinute24");
  const hour12Select = document.getElementById("treatmentTimeHour12");
  const minute12Select = document.getElementById("treatmentTimeMinute12");
  const ampm12Select = document.getElementById("treatmentTimeAmPm12");
  const timeFormatGroup = document.getElementById("timeFormatSelectionGroup");
  if (
    !dateInput ||
    !scheduleLaterCheckbox ||
    !timeLaterInfo ||
    !dateWarningEl ||
    !timeWarningEl ||
    !hour24Select ||
    !minute24Select ||
    !hour12Select ||
    !minute12Select ||
    !ampm12Select ||
    !timeFormatGroup
  ) {
    console.error("Could not find elements for date/time input change check.");
    return;
  }
  const isScheduledLater = scheduleLaterCheckbox.checked;
  const hasDate = dateInput.value !== "";
  const selectedFormat = localStorage.getItem(TIME_FORMAT_KEY) || "24h";
  let timeIsFullySelected = false;
  if (!isScheduledLater && hasDate) {
    if (selectedFormat === "12h") {
      timeIsFullySelected =
        hour12Select.value !== "" && minute12Select.value !== "";
    } else {
      timeIsFullySelected =
        hour24Select.value !== "" && minute24Select.value !== "";
    }
  }
  const shouldEnableTimeInputs = hasDate && !isScheduledLater;
  hour24Select.disabled = !shouldEnableTimeInputs;
  minute24Select.disabled = !shouldEnableTimeInputs;
  hour12Select.disabled = !shouldEnableTimeInputs;
  minute12Select.disabled = !shouldEnableTimeInputs;
  ampm12Select.disabled = !shouldEnableTimeInputs;
  timeFormatGroup.style.display = shouldEnableTimeInputs ? "" : "none";
  timeLaterInfo.style.display = !shouldEnableTimeInputs ? "block" : "none";
  updateTimeInputUI();
  if (isScheduledLater) {
    dateWarningEl.style.display = "none";
    timeWarningEl.style.display = "none";
  } else {
    dateWarningEl.style.display = !hasDate ? "block" : "none";
    timeWarningEl.style.display =
      hasDate && !timeIsFullySelected ? "block" : "none";
  }
  if (!shouldEnableTimeInputs) {
    hour24Select.value = "";
    minute24Select.value = "";
    hour12Select.value = "";
    minute12Select.value = "";
    ampm12Select.value = "AM";
    timeWarningEl.style.display = "none";
  }
}
function handleMarkCompleted(treatmentId) {
  const treatment = getLocalStorage("treatments").find(
    (t) => t && t.id === treatmentId
  );
  if (!treatment) {
    console.error("Treatment not found for completion:", treatmentId);
    alert(
      translations[currentLang]?.treatmentNotFound || "Treatment not found."
    );
    return;
  }
  if (treatment.scheduleLater || !treatment.date) {
    alert(
      translations[currentLang]?.treatmentCompleteUnscheduledError ||
        "This treatment cannot be marked as completed until it has been scheduled with a date and time."
    );
    return;
  }
  const modal = document.getElementById("confirmTimestampModal");
  if (!modal) {
    console.error(
      "Timestamp confirmation modal not found! Completing without confirmation."
    );
    completeTreatmentAction(treatmentId, false);
    return;
  }
  if (treatment.status === "completed") {
    console.log("Treatment already marked completed:", treatmentId);
    return;
  }
  const modalTitle = modal.querySelector("#confirmTimestampTitle");
  const modalPrompt = modal.querySelector("#confirmTimestampPrompt");
  const yesButton = modal.querySelector("#confirmTimestampYesBtn");
  const noButton = modal.querySelector("#confirmTimestampNoBtn");
  if (!modalTitle || !modalPrompt || !yesButton || !noButton) {
    console.error(
      "Required elements missing in timestamp modal. Completing without confirmation."
    );
    completeTreatmentAction(treatmentId, false);
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (isPast(treatment)) {
    const formattedPastDate = formatDateLocale(treatment.date);
    const formattedPastTime = formatTimeLocale(treatment.time, treatment.date);
    modalTitle.textContent = t(
      "confirmTimestampTitle",
      "Confirm Completion Time"
    );
    modalPrompt.textContent = t(
      "confirmTimestampPromptPast",
      "This treatment was scheduled for {date} {time}. Mark as completed and update time to now?"
    )
      .replace("{date}", formattedPastDate)
      .replace("{time}", formattedPastTime);
    yesButton.textContent = t(
      "confirmTimestampYesPast",
      "Yes, Update Time to Now"
    );
    noButton.textContent = t("confirmTimestampNoDefault", "No, Keep Original");
  } else {
    modalTitle.textContent = t(
      "confirmTimestampEarlyTitle",
      "Confirm Early Completion"
    );
    modalPrompt.textContent = t(
      "confirmTimestampEarlyPrompt",
      "Mark this upcoming/current treatment as completed now?"
    );
    yesButton.textContent = t(
      "confirmTimestampEarlyYes",
      "Yes, Mark Completed Now"
    );
    noButton.textContent = t("confirmTimestampNoCancel", "Cancel");
  }
  modal.dataset.treatmentId = treatmentId;
  const oldNoListener = noButton._specificClickListener;
  if (oldNoListener) {
    noButton.removeEventListener("click", oldNoListener);
    delete noButton._specificClickListener;
  }
  let noAction;
  if (isPast(treatment)) {
    noAction = () => {
      completeTreatmentAction(treatmentId, false);
    };
  } else {
    noAction = () => closeModal(modal);
  }
  noButton.addEventListener("click", noAction);
  noButton._specificClickListener = noAction;
  modal.style.zIndex = BASE_MODAL_ZINDEX + 15;
  modal.style.display = "block";
}
function completeTreatmentAction(treatmentId, updateTimestamp) {
  let treatments = getLocalStorage("treatments");
  let treatmentUpdated = false;
  let finalDate = null;
  let originalDate = null;
  const treatmentIndex = treatments.findIndex((t) => t && t.id === treatmentId);
  const timestampModal = document.getElementById("confirmTimestampModal");
  if (timestampModal && timestampModal.style.display === "block") {
    closeModal(timestampModal);
  }
  if (treatmentIndex === -1) {
    console.error("Treatment not found for completion:", treatmentId);
    return;
  }
  const originalTreatment = { ...treatments[treatmentIndex] };
  if (originalTreatment.scheduleLater || !originalTreatment.date) {
    console.warn(
      "Attempted to complete an unscheduled treatment:",
      treatmentId
    );
    return;
  }
  originalDate = originalTreatment.date;
  if (originalTreatment.status === "completed") {
    console.log("Treatment already completed, skipping update:", treatmentId);
    return;
  }
  const updatedDate = updateTimestamp
    ? getCurrentDate()
    : originalTreatment.date;
  const updatedTime = updateTimestamp
    ? getCurrentTime()
    : originalTreatment.time;
  finalDate = updatedDate;
  if (activeTimeouts[treatmentId]) {
    clearTimeout(activeTimeouts[treatmentId]);
    delete activeTimeouts[treatmentId];
  }
  const updatedTreatment = {
    ...originalTreatment,
    status: "completed",
    date: updatedDate,
    time: updatedTime,
    scheduleLater: false
  };
  treatments[treatmentIndex] = updatedTreatment;
  treatmentUpdated = true;
  if (treatmentUpdated) {
    setLocalStorage("treatments", treatments);
    renderFarmList();
    renderCalendar();
    generateReport();
    renderSupplyList();
    scheduleNotifications();
    refreshCalendarDayModalIfNeeded(originalDate, finalDate, treatmentId);
  }
}
function handleUnmarkCompleted(treatmentId) {
  let treatments = getLocalStorage("treatments");
  let treatmentUpdated = false;
  let treatmentDate = null;
  const treatmentIndex = treatments.findIndex((t) => t && t.id === treatmentId);
  if (treatmentIndex === -1) {
    console.error("Treatment not found to unmark:", treatmentId);
    return;
  }
  const treatmentToUnmark = { ...treatments[treatmentIndex] };
  if (treatmentToUnmark.scheduleLater || !treatmentToUnmark.date) {
    console.warn("Cannot unmark an unscheduled treatment:", treatmentId);
    return;
  }
  treatmentDate = treatmentToUnmark.date;
  if (treatmentToUnmark.status === "completed") {
    const updatedTreatment = { ...treatmentToUnmark, status: null };
    treatments[treatmentIndex] = updatedTreatment;
    treatmentUpdated = true;
  } else {
    console.log(
      "Treatment not marked as completed, cannot unmark:",
      treatmentId
    );
    return;
  }
  if (treatmentUpdated) {
    setLocalStorage("treatments", treatments);
    renderFarmList();
    renderCalendar();
    generateReport();
    renderSupplyList();
    scheduleNotifications();
    refreshCalendarDayModalIfNeeded(treatmentDate, treatmentDate, treatmentId);
  }
}
function attachTreatmentModalListeners(form) {
  const doseInput = form.querySelector("#treatmentDose");
  const doseUnitSelect = form.querySelector("#treatmentDoseUnit");
  const appContextTypeSelect = form.querySelector("#treatmentAppContextType");
  const appContextValueInput = form.querySelector("#treatmentAppContextValue");
  const totalSurfaceInput = form.querySelector("#treatmentTotalSurface");
  const calculationHandler = () => calculateTreatmentQuantities();
  const contextStateHandler = () => updateContextFieldState();
  const unitChangeHandler = () => {
    contextStateHandler();
    calculationHandler();
  };
  const placeholderHandler = () => updateAppContextValuePlaceholder();
  const surfaceLimitHandler = (e) => handleSurfaceAreaInput(e.target);
  if (doseInput && doseInput._calcListener) {
    doseInput.removeEventListener("input", doseInput._calcListener);
    delete doseInput._calcListener;
  }
  if (doseUnitSelect && doseUnitSelect._calcListener) {
    doseUnitSelect.removeEventListener("change", doseUnitSelect._calcListener);
    delete doseUnitSelect._calcListener;
  }
  if (doseUnitSelect && doseUnitSelect._contextStateListener) {
    doseUnitSelect.removeEventListener(
      "change",
      doseUnitSelect._contextStateListener
    );
    delete doseUnitSelect._contextStateListener;
  }
  if (appContextTypeSelect && appContextTypeSelect._calcListener) {
    appContextTypeSelect.removeEventListener(
      "change",
      appContextTypeSelect._calcListener
    );
    delete appContextTypeSelect._calcListener;
  }
  if (appContextTypeSelect && appContextTypeSelect._placeholderListener) {
    appContextTypeSelect.removeEventListener(
      "change",
      appContextTypeSelect._placeholderListener
    );
    delete appContextTypeSelect._placeholderListener;
  }
  if (appContextValueInput && appContextValueInput._calcListener) {
    appContextValueInput.removeEventListener(
      "input",
      appContextValueInput._calcListener
    );
    delete appContextValueInput._calcListener;
  }
  if (totalSurfaceInput && totalSurfaceInput._calcListener) {
    totalSurfaceInput.removeEventListener(
      "input",
      totalSurfaceInput._calcListener
    );
    delete totalSurfaceInput._calcListener;
  }
  if (totalSurfaceInput && totalSurfaceInput._surfaceLimitListener) {
    totalSurfaceInput.removeEventListener(
      "input",
      totalSurfaceInput._surfaceLimitListener
    );
    delete totalSurfaceInput._surfaceLimitListener;
  }
  if (doseInput) {
    doseInput.addEventListener("input", calculationHandler);
    doseInput._calcListener = calculationHandler;
  }
  if (doseUnitSelect) {
    doseUnitSelect.addEventListener("change", unitChangeHandler);
    doseUnitSelect._contextStateListener = unitChangeHandler;
  }
  if (appContextTypeSelect) {
    appContextTypeSelect.addEventListener("change", calculationHandler);
    appContextTypeSelect._calcListener = calculationHandler;
  }
  if (appContextTypeSelect) {
    appContextTypeSelect.addEventListener("change", placeholderHandler);
    appContextTypeSelect._placeholderListener = placeholderHandler;
  }
  if (appContextValueInput) {
    appContextValueInput.addEventListener("input", calculationHandler);
    appContextValueInput._calcListener = calculationHandler;
  }
  if (totalSurfaceInput) {
    totalSurfaceInput.addEventListener("input", calculationHandler);
    totalSurfaceInput._calcListener = calculationHandler;
  }
  if (totalSurfaceInput) {
    totalSurfaceInput.addEventListener("input", surfaceLimitHandler);
    totalSurfaceInput._surfaceLimitListener = surfaceLimitHandler;
  }
}
function openAddTreatmentForPest(pestDiseaseId) {
  const pest = getLocalStorage("pestsDiseases").find(
    (p) => p && p.id === pestDiseaseId
  );
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!pest) {
    alert(
      t(
        "treatmentContextPestNotFoundError",
        "Pest not found. Cannot add treatment."
      )
    );
    return;
  }
  if (!pest.farmId) {
    alert(
      t(
        "treatmentContextFarmNotFoundError",
        "Associated farm not found for this pest."
      )
    );
    return;
  }
  const farm = getLocalStorage("farms").find((f) => f && f.id === pest.farmId);
  if (!farm) {
    alert(
      t(
        "treatmentContextFarmGoneError",
        "Farm associated with this pest no longer exists."
      )
    );
    return;
  }
  currentAddingTreatmentForPestId = pestDiseaseId;
  currentEditingTreatmentId = null;
  currentModalFarmSize =
    typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
      ? farm.farmSize
      : null;

  const modal = document.getElementById("treatmentModal");
  const form = document.getElementById("treatmentForm");
  const modalTitle = modal?.querySelector("h2");
  const displayFarmEl = form.querySelector("#treatmentDisplayFarmName");
  const displayCropEl = form.querySelector("#treatmentDisplayCrop");
  const displayPestEl = form.querySelector("#treatmentDisplayPest");
  const productSelect = form.querySelector("#treatmentProductNameSelect");
  const pestLinkInfo = form.querySelector("#treatmentPestLinkInfo");
  const noneProductCheckbox = form.querySelector("#treatmentNoneProductListed");
  const noneProductWarning = form.querySelector("#treatmentNoneProductWarning");
  const scheduleLaterCheckbox = form.querySelector("#treatmentScheduleLater");
  const dateInput = form.querySelector("#treatmentDate");
  const notesInput = form.querySelector("#treatmentNotes");
  const productWarningEl = form.querySelector("#treatmentProductWarning");
  const dateWarningEl = form.querySelector("#treatmentDateWarning");
  const timeWarningEl = form.querySelector("#treatmentTimeWarning");
  const doseInput = form.querySelector("#treatmentDose");
  const doseUnitSelect = form.querySelector("#treatmentDoseUnit");
  const doseWarningEl = form.querySelector("#treatmentDoseWarning");
  const unitWarningEl = form.querySelector("#treatmentUnitWarning");
  const multTypeWarn = form.querySelector("#treatmentMultiplierTypeWarning");
  const multValWarn = form.querySelector("#treatmentMultiplierValueWarning");
  const multWarn = form.querySelector("#treatmentMultiplierWarning");
  const appContextTypeSelect = form.querySelector("#treatmentAppContextType");
  const appContextValueInput = form.querySelector("#treatmentAppContextValue");
  const totalSurfaceInput = form.querySelector("#treatmentTotalSurface");
  const quantityPerHaOutput = form.querySelector("#treatmentQuantityPerHa");
  const totalQuantityNeededOutput = form.querySelector(
    "#treatmentTotalQuantityNeeded"
  );
  const surfaceAreaNote = form.querySelector("#treatmentSurfaceAreaNote");
  const maxAreaSpan = form.querySelector("#treatmentMaxSurfaceArea");

  if (
    !modal ||
    !form ||
    !displayFarmEl ||
    !displayCropEl ||
    !displayPestEl ||
    !productSelect ||
    !pestLinkInfo ||
    !noneProductCheckbox ||
    !noneProductWarning ||
    !scheduleLaterCheckbox ||
    !dateInput ||
    !notesInput ||
    !modalTitle ||
    !productWarningEl ||
    !dateWarningEl ||
    !timeWarningEl ||
    !doseInput ||
    !doseUnitSelect ||
    !doseWarningEl ||
    !unitWarningEl ||
    !multTypeWarn ||
    !multValWarn ||
    !multWarn ||
    !appContextTypeSelect ||
    !appContextValueInput ||
    !totalSurfaceInput ||
    !quantityPerHaOutput ||
    !totalQuantityNeededOutput ||
    !surfaceAreaNote ||
    !maxAreaSpan
  ) {
    console.error("Treatment modal or its required elements not found!");
    currentAddingTreatmentForPestId = null;
    return;
  }
  form.reset();
  productWarningEl.style.display = "none";
  dateWarningEl.style.display = "none";
  timeWarningEl.style.display = "none";
  doseWarningEl.style.display = "none";
  unitWarningEl.style.display = "none";
  multTypeWarn.style.display = "none";
  multValWarn.style.display = "none";
  multWarn.style.display = "none";

  displayFarmEl.textContent = escapeHtml(farm.name);
  const farmCropValue = farm.crop;
  displayCropEl.textContent = t(
    farmCropValue,
    escapeHtml(farmCropValue || t("na", "N/A"))
  );

  let pestCategoryDisplayInTreatmentModal;
  if (pest.category === "unknown") {
    pestCategoryDisplayInTreatmentModal =
      currentLang === "fr" ? "Inconnu" : "unknown";
  } else {
    const categoryKey = `pestType${
      pest.category?.charAt(0).toUpperCase() +
      pest.category?.slice(1).toLowerCase()
    }`;
    pestCategoryDisplayInTreatmentModal = t(
      categoryKey,
      escapeHtml(pest.category || t("na", "N/A"))
    );
  }
  displayPestEl.textContent = `${escapeHtml(
    pest.name
  )} (${pestCategoryDisplayInTreatmentModal})`;
  pestLinkInfo.style.display = "block";

  const titleBase = t("treatmentModalTitleUnifiedBase", "Add/Edit a Treatment");
  const pestNameForTitle = escapeHtml(pest.name);
  const titlePrefixForPest = t("treatmentModalTitlePestPrefix", "for");
  modalTitle.textContent = `${titleBase} ${titlePrefixForPest} ${pestNameForTitle}`;

  modal.dataset.farmId = farm.id;
  modal.dataset.pestId = pest.id;
  modal.dataset.associatedFarmSize = currentModalFarmSize ?? "";

  populateProductNameDropdown();

  noneProductCheckbox.checked = false;
  noneProductWarning.style.display = "none";
  productSelect.value = ""; // Ensure dropdown is reset
  doseInput.value = "";
  doseUnitSelect.value = "";
  appContextTypeSelect.value = "";
  appContextValueInput.value = "";
  appContextValueInput.placeholder = t(
    "factorValuePlaceholder",
    "Enter value..."
  );
  totalSurfaceInput.value =
    currentModalFarmSize !== null ? currentModalFarmSize : "";
  quantityPerHaOutput.value = t("na", "N/A");
  totalQuantityNeededOutput.value = t("na", "N/A");
  if (surfaceAreaNote && maxAreaSpan)
    maxAreaSpan.textContent =
      currentModalFarmSize !== null
        ? formatNumberLocale(currentModalFarmSize)
        : t("na", "N/A");
  scheduleLaterCheckbox.checked = false;
  dateInput.value = "";
  notesInput.value = "";
  clearTimeSelects("12h");
  clearTimeSelects("24h");
  initializeTimeFormatSelection();
  updateTimeInputUI();
  updateProductFieldStates();
  calculateTreatmentQuantities();
  updateAppContextValuePlaceholder();
  handleTreatmentDateTimeInputChange();

  const calendarModalZ = parseInt(
    document.getElementById("calendarDayModal")?.style.zIndex || "0"
  );
  modal.style.zIndex = Math.max(BASE_MODAL_ZINDEX, calendarModalZ) + 1;
  modal.style.display = "block";
  productSelect.focus();
  attachTreatmentModalListeners(form);
}

function editTreatment(treatmentId) {
  const treatment = getLocalStorage("treatments").find(
    (treat) => treat && treat.id === treatmentId
  );
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!treatment) {
    alert(t("treatmentNotFoundError", "Could not load treatment for editing."));
    return;
  }
  const farm = getLocalStorage("farms").find(
    (f) => f && f.id === treatment.farmId
  );
  const pest = treatment.pestDiseaseId
    ? getLocalStorage("pestsDiseases").find(
        (p) => p && p.id === treatment.pestDiseaseId
      )
    : null;
  currentModalFarmSize =
    farm && typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
      ? farm.farmSize
      : null;

  const modal = document.getElementById("treatmentModal");
  const form = document.getElementById("treatmentForm");
  const modalTitle = modal?.querySelector("h2");
  const displayFarmEl = form.querySelector("#treatmentDisplayFarmName");
  const displayCropEl = form.querySelector("#treatmentDisplayCrop");
  const displayPestEl = form.querySelector("#treatmentDisplayPest");
  const productSelect = form.querySelector("#treatmentProductNameSelect");
  const pestLinkInfo = form.querySelector("#treatmentPestLinkInfo");
  const noneProductCheckbox = form.querySelector("#treatmentNoneProductListed");
  const noneProductWarning = form.querySelector("#treatmentNoneProductWarning");
  const scheduleLaterCheckbox = form.querySelector("#treatmentScheduleLater");
  const dateInput = form.querySelector("#treatmentDate");
  const notesInput = form.querySelector("#treatmentNotes");
  const productWarningEl = form.querySelector("#treatmentProductWarning");
  const dateWarningEl = form.querySelector("#treatmentDateWarning");
  const timeWarningEl = form.querySelector("#treatmentTimeWarning");
  const doseInput = form.querySelector("#treatmentDose");
  const doseUnitSelect = form.querySelector("#treatmentDoseUnit");
  const doseWarningEl = form.querySelector("#treatmentDoseWarning");
  const unitWarningEl = form.querySelector("#treatmentUnitWarning");
  const multTypeWarn = form.querySelector("#treatmentMultiplierTypeWarning");
  const multValWarn = form.querySelector("#treatmentMultiplierValueWarning");
  const multWarn = form.querySelector("#treatmentMultiplierWarning");
  const appContextTypeSelect = form.querySelector("#treatmentAppContextType");
  const appContextValueInput = form.querySelector("#treatmentAppContextValue");
  const totalSurfaceInput = form.querySelector("#treatmentTotalSurface");
  const quantityPerHaOutput = form.querySelector("#treatmentQuantityPerHa");
  const totalQuantityNeededOutput = form.querySelector(
    "#treatmentTotalQuantityNeeded"
  );
  const surfaceAreaNote = form.querySelector("#treatmentSurfaceAreaNote");
  const maxAreaSpan = form.querySelector("#treatmentMaxSurfaceArea");

  if (
    !modal ||
    !form ||
    !displayFarmEl ||
    !displayCropEl ||
    !displayPestEl ||
    !productSelect ||
    !pestLinkInfo ||
    !noneProductCheckbox ||
    !noneProductWarning ||
    !scheduleLaterCheckbox ||
    !dateInput ||
    !notesInput ||
    !modalTitle ||
    !productWarningEl ||
    !dateWarningEl ||
    !timeWarningEl ||
    !doseInput ||
    !doseUnitSelect ||
    !doseWarningEl ||
    !unitWarningEl ||
    !multTypeWarn ||
    !multValWarn ||
    !multWarn ||
    !appContextTypeSelect ||
    !appContextValueInput ||
    !totalSurfaceInput ||
    !quantityPerHaOutput ||
    !totalQuantityNeededOutput ||
    !surfaceAreaNote ||
    !maxAreaSpan
  ) {
    console.error(
      "Treatment modal or its required elements not found for editing."
    );
    return;
  }
  if (!farm) {
    alert(
      t(
        "treatmentFarmNotFoundError",
        "The farm associated with this treatment no longer exists. Cannot edit."
      )
    );
    return;
  }
  if (treatment.pestDiseaseId && !pest) {
    console.warn(
      `Linked pest (ID: ${treatment.pestDiseaseId}) for treatment ${treatment.id} no longer exists.`
    );
  }
  currentEditingTreatmentId = treatmentId;
  currentAddingTreatmentForPestId = null;
  form.reset();
  productWarningEl.style.display = "none";
  dateWarningEl.style.display = "none";
  timeWarningEl.style.display = "none";
  doseWarningEl.style.display = "none";
  unitWarningEl.style.display = "none";
  multTypeWarn.style.display = "none";
  multValWarn.style.display = "none";
  multWarn.style.display = "none";

  displayFarmEl.textContent = escapeHtml(farm.name);
  const farmCropValue = farm.crop;
  displayCropEl.textContent = t(
    farmCropValue,
    escapeHtml(farmCropValue || t("na", "N/A"))
  );

  const titleBase = t("treatmentModalTitleUnifiedBase", "Add/Edit a Treatment");
  const titlePrefixForPest = t("treatmentModalTitlePestPrefix", "for");

  if (pest) {
    let pestCategoryDisplayInTreatmentModal;
    if (pest.category === "unknown") {
      pestCategoryDisplayInTreatmentModal =
        currentLang === "fr" ? "Inconnu" : "unknown";
    } else {
      const categoryKey = `pestType${
        pest.category?.charAt(0).toUpperCase() +
        pest.category?.slice(1).toLowerCase()
      }`;
      pestCategoryDisplayInTreatmentModal = t(
        categoryKey,
        escapeHtml(pest.category || t("na", "N/A"))
      );
    }
    displayPestEl.textContent = `${escapeHtml(
      pest.name
    )} (${pestCategoryDisplayInTreatmentModal})`;
    pestLinkInfo.style.display = "block";
    modalTitle.textContent = `${titleBase} ${titlePrefixForPest} ${escapeHtml(
      pest.name
    )}`;
  } else {
    displayPestEl.textContent = t(
      "associatedPestNone",
      "None (General Farm Treatment)"
    );
    pestLinkInfo.style.display = "none";
    modalTitle.textContent = `${titleBase} ${t(
      "treatmentModalTitleGeneral",
      "(General)"
    )}`;
  }

  modal.dataset.farmId = farm.id;
  modal.dataset.pestId = pest ? pest.id : "";
  modal.dataset.associatedFarmSize = currentModalFarmSize ?? "";

  populateProductNameDropdown();

  let isNoneChecked = false;
  if (
    treatment.productName &&
    getProducts().some((p) => p.name === treatment.productName)
  ) {
    productSelect.value = treatment.productName;
    noneProductCheckbox.checked = false;
    noneProductWarning.style.display = "none";
    isNoneChecked = false;
  } else {
    productSelect.value = "";
    noneProductCheckbox.checked = true;
    noneProductWarning.style.display = "block";
    isNoneChecked = true;
    if (treatment.productName) {
      console.log(
        `Treatment product "${treatment.productName}" not found or was 'none'. Setting to 'None'.`
      );
    }
  }
  doseInput.value = isNoneChecked ? "" : treatment.applicationDose ?? "";
  const doseUnitExists = Array.from(doseUnitSelect.options).some(
    (opt) => opt.value === treatment.applicationUnit
  );
  doseUnitSelect.value =
    doseUnitExists && treatment.applicationUnit
      ? treatment.applicationUnit
      : "";
  appContextTypeSelect.value = treatment.appContextType || "";
  appContextValueInput.value = treatment.appContextValue ?? "";
  totalSurfaceInput.value =
    treatment.totalSurface !== null
      ? treatment.totalSurface
      : currentModalFarmSize !== null
      ? currentModalFarmSize
      : "";
  if (surfaceAreaNote && maxAreaSpan)
    maxAreaSpan.textContent =
      currentModalFarmSize !== null
        ? formatNumberLocale(currentModalFarmSize)
        : t("na", "N/A");
  scheduleLaterCheckbox.checked = !!treatment.scheduleLater;
  dateInput.value = treatment.date || "";
  notesInput.value = treatment.notes || "";

  initializeTimeFormatSelection();
  updateTimeInputUI();
  if (!treatment.scheduleLater && treatment.time) {
    populateTimeInputs(treatment.time);
  } else {
    clearTimeSelects("12h");
    clearTimeSelects("24h");
  }

  updateProductFieldStates();
  calculateTreatmentQuantities();
  updateAppContextValuePlaceholder();
  handleTreatmentDateTimeInputChange();

  const calendarModalZ = parseInt(
    document.getElementById("calendarDayModal")?.style.zIndex || "0"
  );
  modal.style.zIndex = Math.max(BASE_MODAL_ZINDEX, calendarModalZ) + 1;
  modal.style.display = "block";
  if (noneProductCheckbox.checked) {
    dateInput.focus();
  } else {
    productSelect.focus();
  }
  attachTreatmentModalListeners(form);
}
function openAddTreatmentModal() {
  alert(
    translations[currentLang]?.treatmentAddDirectError ||
      "Please add treatments via the 'Add Treatment' (+) button on a specific Farm or Pest/Disease in the Planning section."
  );
}
function validateAndExtractTreatmentData(form, modal) {
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const farmId = parseInt(modal.dataset.farmId);
  const pestId = modal.dataset.pestId ? parseInt(modal.dataset.pestId) : null;
  const isNoneProductChecked = form.querySelector("#treatmentNoneProductListed")
    .checked;
  const productSelect = form.querySelector("#treatmentProductNameSelect");
  const selectedProductName = productSelect.value;
  const scheduleLaterCheckbox = form.querySelector("#treatmentScheduleLater");
  let date = form.querySelector("#treatmentDate").value;
  const selectedTimeFormat = localStorage.getItem(TIME_FORMAT_KEY) || "24h";
  let time = null;
  const hour24Select = form.querySelector("#treatmentTimeHour24");
  const minute24Select = form.querySelector("#treatmentTimeMinute24");
  const hour12Select = form.querySelector("#treatmentTimeHour12");
  const minute12Select = form.querySelector("#treatmentTimeMinute12");
  const ampm12Select = form.querySelector("#treatmentTimeAmPm12");
  const notes = form.querySelector("#treatmentNotes").value.trim();
  let isScheduleLaterChecked = scheduleLaterCheckbox.checked;
  const doseInput = form.querySelector("#treatmentDose");
  const doseUnitSelect = form.querySelector("#treatmentDoseUnit");
  const applicationDoseValue = doseInput.value.trim();
  const applicationUnit = doseUnitSelect.value;
  const applicationDose =
    applicationDoseValue === "" ? null : parseFloat(applicationDoseValue);
  const appContextTypeSelect = form.querySelector("#treatmentAppContextType");
  const appContextValueInput = form.querySelector("#treatmentAppContextValue");
  const totalSurfaceInput = form.querySelector("#treatmentTotalSurface");
  const appContextType = appContextTypeSelect.value;
  const appContextValueStr = appContextValueInput.value.trim();
  const totalSurfaceStr = totalSurfaceInput.value.trim();
  const appContextValue =
    appContextValueStr === "" ? null : parseFloat(appContextValueStr);
  const totalSurface =
    totalSurfaceStr === "" ? null : parseFloat(totalSurfaceStr);
  const productWarningEl = form.querySelector("#treatmentProductWarning");
  const dateWarningEl = form.querySelector("#treatmentDateWarning");
  const timeWarningEl = form.querySelector("#treatmentTimeWarning");
  const doseWarningEl = form.querySelector("#treatmentDoseWarning");
  const unitWarningEl = form.querySelector("#treatmentUnitWarning");
  const multTypeWarn = form.querySelector("#treatmentMultiplierTypeWarning");
  const multValWarn = form.querySelector("#treatmentMultiplierValueWarning");
  const multWarn = form.querySelector("#treatmentMultiplierWarning");
  productWarningEl.style.display = "none";
  dateWarningEl.style.display = "none";
  timeWarningEl.style.display = "none";
  doseWarningEl.style.display = "none";
  unitWarningEl.style.display = "none";
  multTypeWarn.style.display = "none";
  multValWarn.style.display = "none";
  multWarn.style.display = "none";
  let isValid = true;
  let firstInvalidElement = null;
  if (!farmId || isNaN(farmId)) {
    alert(
      t(
        "treatmentSaveFarmMissingError",
        "Cannot save treatment: Associated farm is missing."
      )
    );
    console.error("Validation failed: Missing farmId on modal dataset.");
    return null;
  }
  if (!isNoneProductChecked) {
    if (!selectedProductName) {
      productWarningEl.style.display = "block";
      if (!firstInvalidElement) firstInvalidElement = productSelect;
      isValid = false;
    }
    if (applicationDoseValue === "") {
      doseWarningEl.textContent = t(
        "treatmentDoseWarning",
        "Please enter the Dose to apply when a product is selected."
      );
      doseWarningEl.style.display = "block";
      if (!firstInvalidElement) firstInvalidElement = doseInput;
      isValid = false;
    } else if (isNaN(applicationDose) || applicationDose < 0) {
      doseWarningEl.textContent = t(
        "supplyCalcQtyErrorEnterDose",
        "Please enter a valid, non-negative number for the Dose."
      );
      doseWarningEl.style.display = "block";
      if (!firstInvalidElement) firstInvalidElement = doseInput;
      isValid = false;
    }
    if (!applicationUnit) {
      unitWarningEl.style.display = "block";
      if (!firstInvalidElement) firstInvalidElement = doseUnitSelect;
      isValid = false;
    }
    const requiresMultiplier =
      applicationUnit &&
      !applicationUnit.endsWith("/ha") &&
      applicationUnit !== "other";
    if (requiresMultiplier) {
      if (!appContextType) {
        multTypeWarn.style.display = "block";
        if (!firstInvalidElement) firstInvalidElement = appContextTypeSelect;
        isValid = false;
      }
      if (appContextValueStr === "") {
        multValWarn.textContent = t(
          "treatmentMultiplierValueWarning",
          "Please enter a Multiplier Value."
        );
        multValWarn.style.display = "block";
        if (!firstInvalidElement) firstInvalidElement = appContextValueInput;
        isValid = false;
      } else if (isNaN(appContextValue) || appContextValue < 0) {
        multValWarn.textContent = t(
          "treatmentMultiplierValueWarningNonNeg",
          "Please enter a valid, non-negative Multiplier Value."
        );
        multValWarn.style.display = "block";
        if (!firstInvalidElement) firstInvalidElement = appContextValueInput;
        isValid = false;
      }
    }
  }
  if (totalSurfaceStr !== "" && (isNaN(totalSurface) || totalSurface < 0)) {
    alert(
      t(
        "treatmentSaveSurfaceError",
        "Please enter a valid, non-negative number for the Total Surface (ha)."
      )
    );
    if (!firstInvalidElement) firstInvalidElement = totalSurfaceInput;
    isValid = false;
  }
  if (
    currentModalFarmSize !== null &&
    totalSurface !== null &&
    totalSurface > currentModalFarmSize
  ) {
    const errorMsg = t(
      "treatmentSaveSurfaceMaxError",
      "Total Surface to Treat ({surfaceValue} ha) cannot be greater than the farm size ({farmSize} ha)."
    )
      .replace("{surfaceValue}", formatNumberLocale(totalSurface))
      .replace("{farmSize}", formatNumberLocale(currentModalFarmSize));
    alert(errorMsg);
    totalSurfaceInput.classList.add("capped-value");
    if (!firstInvalidElement) firstInvalidElement = totalSurfaceInput;
    isValid = false;
  }
  if (!isScheduleLaterChecked) {
    if (!date) {
      dateWarningEl.style.display = "block";
      if (!firstInvalidElement)
        firstInvalidElement = form.querySelector("#treatmentDate");
      isValid = false;
    } else {
      let timeSelectedAndValid = false;
      let timeValidationError = t(
        "treatmentTimeWarning",
        "Please select a valid Application Time when a date is specified."
      );
      if (selectedTimeFormat === "12h") {
        const hourVal = hour12Select.value;
        const minVal = minute12Select.value;
        const periodVal = ampm12Select.value;
        if (hourVal !== "" && minVal !== "") {
          time = convert12hSelectTo24h(hourVal, minVal, periodVal);
          if (time) {
            timeSelectedAndValid = true;
          } else {
            console.error(
              "Failed to convert 12h select values during validation."
            );
            timeValidationError = t(
              "treatmentTimeWarningInvalid12h",
              "Invalid 12h time selection."
            );
          }
        }
      } else {
        const hourVal = hour24Select.value;
        const minVal = minute24Select.value;
        if (hourVal !== "" && minVal !== "") {
          if (!isNaN(parseInt(hourVal)) && !isNaN(parseInt(minVal))) {
            time = `${String(hourVal).padStart(2, "0")}:${minVal}`;
            timeSelectedAndValid = true;
          } else {
            timeValidationError = t(
              "treatmentTimeWarningInvalid24h",
              "Invalid 24h time selection."
            );
          }
        }
      }
      if (!timeSelectedAndValid) {
        timeWarningEl.textContent = timeValidationError;
        timeWarningEl.style.display = "block";
        if (!firstInvalidElement) {
          firstInvalidElement =
            selectedTimeFormat === "12h"
              ? hour12Select.value === ""
                ? hour12Select
                : minute12Select
              : hour24Select.value === ""
              ? hour24Select
              : minute24Select;
        }
        isValid = false;
      }
    }
  }
  if (!isValid && firstInvalidElement) {
    firstInvalidElement.focus();
  }
  if (!isValid) return null;
  if (isScheduleLaterChecked) {
    date = "";
    time = "";
  }
  const isMultiplierNeededForSave =
    !isNoneProductChecked &&
    applicationUnit &&
    !applicationUnit.endsWith("/ha") &&
    applicationUnit !== "other";
  const treatmentData = {
    productName: isNoneProductChecked ? null : selectedProductName,
    farmId: farmId,
    pestDiseaseId: pestId,
    date: date,
    time: time,
    notes: notes,
    scheduleLater: isScheduleLaterChecked,
    applicationDose: isNoneProductChecked ? null : applicationDose,
    applicationUnit: isNoneProductChecked ? null : applicationUnit || null,
    appContextType: isMultiplierNeededForSave ? appContextType || null : null,
    appContextValue: isMultiplierNeededForSave ? appContextValue : null,
    totalSurface: isNoneProductChecked ? null : totalSurface
  };
  const preservedData = {
    farmId: farmId,
    pestId: pestId,
    productName: treatmentData.productName,
    isNoneChecked: isNoneProductChecked,
    applicationDose: treatmentData.applicationDose,
    applicationUnit: treatmentData.applicationUnit,
    appContextType: treatmentData.appContextType,
    appContextValue: treatmentData.appContextValue,
    totalSurface: treatmentData.totalSurface,
    notes: notes
  };
  return { treatmentData, preservedData };
}
function handleTreatmentSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const modal = form.closest(".modal");
  const validationResult = validateAndExtractTreatmentData(form, modal);
  if (!validationResult) return;
  const { treatmentData } = validationResult;
  checkPastDateAndSave(treatmentData, null);
}
function handleSaveAndNextTreatment() {
  const form = document.getElementById("treatmentForm");
  const modal = form.closest(".modal");
  const validationResult = validateAndExtractTreatmentData(form, modal);
  if (!validationResult) return;
  const { treatmentData, preservedData } = validationResult;
  checkPastDateAndSave(treatmentData, preservedData);
}
function checkPastDateAndSave(treatmentData, preservedDataForNext) {
  let shouldCheckPastDate =
    !treatmentData.scheduleLater && treatmentData.date && treatmentData.time;
  let isPastDate = false;
  if (shouldCheckPastDate) {
    const now = new Date();
    let treatmentDateTime;
    try {
      const timeParts = treatmentData.time.split(":");
      const formattedTime = `${String(timeParts[0] || "00").padStart(
        2,
        "0"
      )}:${String(timeParts[1] || "00").padStart(2, "0")}:${String(
        timeParts[2] || "00"
      ).padStart(2, "0")}`;
      treatmentDateTime = new Date(`${treatmentData.date}T${formattedTime}`);
      if (isNaN(treatmentDateTime.getTime())) {
        console.warn("Invalid date/time for past check during submission.");
        shouldCheckPastDate = false;
      } else {
        isPastDate = treatmentDateTime < now;
      }
    } catch (err) {
      console.error("Error parsing date/time for past check:", err);
      shouldCheckPastDate = false;
    }
  }
  const editingId = currentEditingTreatmentId;
  const isCompletingPastAction =
    isPastDate &&
    (!editingId ||
      getLocalStorage("treatments").find((t) => t.id === editingId)?.status !==
        "completed");
  if (shouldCheckPastDate && isCompletingPastAction) {
    const warningModal = document.getElementById("pastDateWarningModal");
    const confirmBtn = document.getElementById("confirmPastDateBtn");
    const editBtn = document.getElementById("editPastDateBtn");
    const treatmentModal = document.getElementById("treatmentModal");
    if (!warningModal || !confirmBtn || !editBtn) {
      console.error(
        "Past date warning modal or its buttons not found. Saving anyway."
      );
      saveAndProceed(treatmentData, preservedDataForNext);
      return;
    }
    if (confirmBtn._specificClickListener) {
      confirmBtn.removeEventListener(
        "click",
        confirmBtn._specificClickListener
      );
      delete confirmBtn._specificClickListener;
    }
    if (editBtn._specificClickListener) {
      editBtn.removeEventListener("click", editBtn._specificClickListener);
      delete editBtn._specificClickListener;
    }
    const confirmAction = () => {
      saveAndProceed(treatmentData, preservedDataForNext);
      closeModal(warningModal);
    };
    confirmBtn.addEventListener("click", confirmAction);
    confirmBtn._specificClickListener = confirmAction;
    const goBackAction = () => {
      closeModal(warningModal);
      const dateInput = treatmentModal?.querySelector("#treatmentDate");
      if (dateInput) {
        dateInput.focus();
      } else {
        console.warn(
          "Could not find date input to focus after closing past date warning."
        );
      }
    };
    editBtn.addEventListener("click", goBackAction);
    editBtn._specificClickListener = goBackAction;
    warningModal.style.zIndex =
      parseInt(treatmentModal?.style.zIndex || BASE_MODAL_ZINDEX) + 5;
    warningModal.style.display = "block";
  } else {
    saveAndProceed(treatmentData, preservedDataForNext);
  }
}
function saveAndProceed(treatmentData, preservedDataForNext) {
  let originalDateBeforeUpdate = null;
  const editingId = currentEditingTreatmentId;
  if (editingId) {
    const treatments = getLocalStorage("treatments");
    const existing = treatments.find((t) => t && t.id === editingId);
    if (existing) originalDateBeforeUpdate = existing.date;
  }
  saveTreatmentData(treatmentData, originalDateBeforeUpdate);
  if (preservedDataForNext) {
    reopenTreatmentModalWithData(preservedDataForNext);
  } else {
    closeModal(document.getElementById("treatmentModal"));
    currentEditingTreatmentId = null;
    currentAddingTreatmentForPestId = null;
  }
}
function saveTreatmentData(treatmentData, originalDateBeforeUpdate) {
  let treatments = getLocalStorage("treatments");
  let wasEditing = Boolean(currentEditingTreatmentId);
  let savedTreatmentId = null;
  treatmentData.status = treatmentData.status || null;
  if (currentEditingTreatmentId && activeTimeouts[currentEditingTreatmentId]) {
    clearTimeout(activeTimeouts[currentEditingTreatmentId]);
    delete activeTimeouts[currentEditingTreatmentId];
  }
  if (treatmentData.scheduleLater) {
    treatmentData.date = "";
    treatmentData.time = "";
    treatmentData.status = null;
  } else if (treatmentData.date && treatmentData.time) {
    treatmentData.scheduleLater = false;
  }
  if (treatmentData.productName === null) {
    treatmentData.applicationDose = null;
    treatmentData.applicationUnit = null;
    treatmentData.appContextType = null;
    treatmentData.appContextValue = null;
    treatmentData.totalSurface = null;
  }
  const editingIdBeingSaved = currentEditingTreatmentId;
  if (editingIdBeingSaved) {
    const existingTreatmentIndex = treatments.findIndex(
      (t) => t && t.id === editingIdBeingSaved
    );
    if (existingTreatmentIndex !== -1) {
      const existingTreatment = treatments[existingTreatmentIndex];
      const updatedTreatment = {
        ...existingTreatment,
        ...treatmentData,
        id: editingIdBeingSaved,
        status: existingTreatment.status
      };
      treatments[existingTreatmentIndex] = updatedTreatment;
      savedTreatmentId = editingIdBeingSaved;
      console.log(`Updated treatment ID: ${savedTreatmentId}`);
    } else {
      console.error(
        "Attempting to save edit for non-existent treatment ID:",
        editingIdBeingSaved
      );
      return;
    }
  } else {
    treatmentData.id = Date.now();
    savedTreatmentId = treatmentData.id;
    treatmentData.status = null;
    treatments.push(treatmentData);
    console.log(`Added new treatment ID: ${savedTreatmentId}`);
  }
  setLocalStorage("treatments", treatments);
  currentEditingTreatmentId = null;
  currentAddingTreatmentForPestId = null;
  renderFarmList();
  renderCalendar();
  generateReport();
  renderSupplyList();
  scheduleNotifications();
  refreshCalendarDayModalIfNeeded(
    originalDateBeforeUpdate,
    treatmentData.date,
    savedTreatmentId,
    wasEditing
  );
}
function reopenTreatmentModalWithData(preservedData) {
  const modal = document.getElementById("treatmentModal");
  const form = document.getElementById("treatmentForm");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!modal || !form) {
    console.error("Cannot reopen treatment modal: Elements not found.");
    return;
  }
  const displayFarmEl = form.querySelector("#treatmentDisplayFarmName");
  const displayCropEl = form.querySelector("#treatmentDisplayCrop");
  const displayPestEl = form.querySelector("#treatmentDisplayPest");
  const pestLinkInfo = form.querySelector("#treatmentPestLinkInfo");
  const productSelect = form.querySelector("#treatmentProductNameSelect");
  const noneProductCheckbox = form.querySelector("#treatmentNoneProductListed");
  const noneProductWarning = form.querySelector("#treatmentNoneProductWarning");
  const dateInput = form.querySelector("#treatmentDate");
  const notesInput = form.querySelector("#treatmentNotes");
  const scheduleLaterCheckbox = form.querySelector("#treatmentScheduleLater");
  const modalTitle = modal?.querySelector("h2");
  const productWarningEl = form.querySelector("#treatmentProductWarning");
  const dateWarningEl = form.querySelector("#treatmentDateWarning");
  const timeWarningEl = form.querySelector("#treatmentTimeWarning");
  const doseInput = form.querySelector("#treatmentDose");
  const doseUnitSelect = form.querySelector("#treatmentDoseUnit");
  const doseWarningEl = form.querySelector("#treatmentDoseWarning");
  const unitWarningEl = form.querySelector("#treatmentUnitWarning");
  const multTypeWarn = form.querySelector("#treatmentMultiplierTypeWarning");
  const multValWarn = form.querySelector("#treatmentMultiplierValueWarning");
  const multWarn = form.querySelector("#treatmentMultiplierWarning");
  const appContextTypeSelect = form.querySelector("#treatmentAppContextType");
  const appContextValueInput = form.querySelector("#treatmentAppContextValue");
  const totalSurfaceInput = form.querySelector("#treatmentTotalSurface");
  const quantityPerHaOutput = form.querySelector("#treatmentQuantityPerHa");
  const totalQuantityNeededOutput = form.querySelector(
    "#treatmentTotalQuantityNeeded"
  );
  const surfaceAreaNote = form.querySelector("#treatmentSurfaceAreaNote");
  const maxAreaSpan = form.querySelector("#treatmentMaxSurfaceArea");
  if (!displayFarmEl || !displayCropEl || !maxAreaSpan) {
    console.error(
      "Cannot reopen treatment modal: Required form elements not found."
    );
    return;
  }
  const {
    farmId,
    pestId,
    productName,
    notes,
    isNoneChecked,
    applicationDose,
    applicationUnit,
    appContextType,
    appContextValue,
    totalSurface
  } = preservedData;
  const farm = getLocalStorage("farms").find((f) => f && f.id === farmId);
  const pest = pestId
    ? getLocalStorage("pestsDiseases").find((p) => p && p.id === pestId)
    : null;
  if (!farm) {
    console.error(
      "Cannot reopen treatment modal: Associated farm data is missing."
    );
    alert("Error reopening modal: Farm data not found.");
    return;
  }
  currentEditingTreatmentId = null;
  currentAddingTreatmentForPestId = pestId;
  currentModalFarmSize =
    farm && typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
      ? farm.farmSize
      : null;
  productWarningEl.style.display = "none";
  dateWarningEl.style.display = "none";
  timeWarningEl.style.display = "none";
  doseWarningEl.style.display = "none";
  unitWarningEl.style.display = "none";
  multTypeWarn.style.display = "none";
  multValWarn.style.display = "none";
  multWarn.style.display = "none";
  displayFarmEl.textContent = escapeHtml(farm.name);
  displayCropEl.textContent = escapeHtml(farm.crop || t("na", "N/A"));
  const titlePrefix = t("treatmentModalTitleAdd", "Add/Edit Treatment for");
  if (pest) {
    displayPestEl.textContent = `${escapeHtml(pest.name)} (${escapeHtml(
      pest.category || t("na", "N/A")
    )})`;
    pestLinkInfo.style.display = "block";
    modalTitle.textContent = `${titlePrefix} ${escapeHtml(pest.name)}`;
  } else {
    displayPestEl.textContent = t(
      "associatedPestNone",
      "None (General Farm Treatment)"
    );
    pestLinkInfo.style.display = "none";
    modalTitle.textContent = `${titlePrefix} ${t(
      "treatmentModalTitleGeneral",
      "(General)"
    )}`;
  }
  modal.dataset.farmId = farmId;
  modal.dataset.pestId = pestId || "";
  modal.dataset.associatedFarmSize = currentModalFarmSize ?? "";
  if (surfaceAreaNote && maxAreaSpan)
    maxAreaSpan.textContent =
      currentModalFarmSize !== null
        ? formatNumberLocale(currentModalFarmSize)
        : t("na", "N/A");
  populateProductNameDropdown();
  noneProductCheckbox.checked = isNoneChecked;
  productSelect.value = isNoneChecked ? "" : productName || "";
  noneProductWarning.style.display = isNoneChecked ? "block" : "none";
  doseInput.value = applicationDose ?? "";
  const doseUnitExists = Array.from(doseUnitSelect.options).some(
    (opt) => opt.value === applicationUnit
  );
  doseUnitSelect.value =
    doseUnitExists && applicationUnit ? applicationUnit : "";
  appContextTypeSelect.value = appContextType || "";
  appContextValueInput.value = appContextValue ?? "";
  totalSurfaceInput.value =
    totalSurface ?? (currentModalFarmSize !== null ? currentModalFarmSize : "");
  notesInput.value = "";
  dateInput.value = "";
  clearTimeSelects("12h");
  clearTimeSelects("24h");
  scheduleLaterCheckbox.checked = false;
  initializeTimeFormatSelection();
  updateTimeInputUI();
  updateProductFieldStates();
  calculateTreatmentQuantities();
  updateAppContextValuePlaceholder();
  handleTreatmentDateTimeInputChange();
  const calendarDayModal = document.getElementById("calendarDayModal");
  let baseZ = BASE_MODAL_ZINDEX;
  if (calendarDayModal && calendarDayModal.style.display === "block") {
    const calendarZ = parseInt(calendarDayModal.style.zIndex || "0");
    baseZ = Math.max(baseZ, calendarZ);
  }
  modal.style.zIndex = baseZ + 1;
  if (modal.style.display !== "block") modal.style.display = "block";
  dateInput.focus();
  attachTreatmentModalListeners(form);
}
function showTreatmentDetails(treatmentId) {
  const treatment = getLocalStorage("treatments").find(
    (treat) => treat && treat.id === treatmentId
  );
  const modal = document.getElementById("treatmentDetailsModal");
  const content = document.getElementById("treatmentDetailsContent");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  if (!treatment || !modal || !content) {
    alert(t("treatmentNotFound", "Treatment details not found."));
    console.error(
      `Could not find treatment or modal elements for ID: ${treatmentId}`
    );
    return;
  }

  const farm = getLocalStorage("farms").find(
    (f) => f && f.id === treatment.farmId
  );
  const farmName = farm
    ? escapeHtml(farm.name)
    : t("farmDetailsTitle", "Unknown Farm");
  const farmCropValue = farm ? farm.crop : null;
  const translatedTreatmentCrop =
    translations[currentLang]?.[farmCropValue] ||
    escapeHtml(farmCropValue || t("na", "N/A"));

  let pestDisplay = t(
    "treatmentDetailsPestNone",
    "None (General Farm Treatment)"
  );
  if (treatment.pestDiseaseId) {
    const pest = getLocalStorage("pestsDiseases").find(
      (p) => p && p.id === treatment.pestDiseaseId
    );
    pestDisplay = pest
      ? `${escapeHtml(pest.name)} (${escapeHtml(
          pest.category || t("na", "N/A")
        )})`
      : t("treatmentDetailsPestUnknown", "Unknown Linked Pest");
  }

  const productNameDisplay = treatment.productName
    ? escapeHtml(treatment.productName)
    : t("treatmentDetailsProductNone", "Other (Not Listed)");
  const products = getProducts();
  const productDetails = products.find((p) => p.name === treatment.productName);
  const productRates = productDetails?.rate || t("na", "N/A");

  let doseAppliedDisplay = t("na", "N/A");
  if (
    treatment.applicationDose !== null &&
    typeof treatment.applicationDose === "number" &&
    !isNaN(treatment.applicationDose)
  ) {
    doseAppliedDisplay = `${formatNumberLocale(
      treatment.applicationDose
    )} ${escapeHtml(treatment.applicationUnit || "")}`;
  } else if (treatment.productName === null) {
    doseAppliedDisplay = t("treatmentDetailsDoseNone", "N/A (No Product)");
  }

  let appContextTypeDisplay = t("na", "N/A");
  if (treatment.appContextType) {
    let displayKey;
    switch (treatment.appContextType) {
      case "applicators_ha":
        displayKey = "factorAppHa";
        break;
      case "plants_ha":
        displayKey = "factorPlantHa";
        break;
      case "total_weight":
        displayKey = "factorWeight";
        break;
      case "total_volume":
        displayKey = "factorVolume";
        break;
      case "units":
        displayKey = "factorUnits";
        break;
      default:
        displayKey = null;
    }
    appContextTypeDisplay = displayKey
      ? t(displayKey, treatment.appContextType)
      : escapeHtml(treatment.appContextType);
  }

  const appContextValueDisplay =
    treatment.appContextValue !== null &&
    typeof treatment.appContextValue === "number" &&
    !isNaN(treatment.appContextValue)
      ? formatNumberLocale(treatment.appContextValue)
      : t("na", "N/A");
  const totalSurfaceDisplay =
    treatment.totalSurface !== null &&
    typeof treatment.totalSurface === "number" &&
    !isNaN(treatment.totalSurface)
      ? `${formatNumberLocale(treatment.totalSurface)} ha`
      : t("na", "N/A");

  const {
    qtyPerHa,
    totalQty,
    unitLabel: calculatedUnitLabel
  } = calculateQuantitiesFromTreatmentData(treatment);
  const quantityPerHaDisplay =
    qtyPerHa !== null
      ? `${formatNumberLocale(qtyPerHa)} ${escapeHtml(
          calculatedUnitLabel || t("units", "units")
        )}/ha`
      : t("na", "N/A (Check Entry)");
  const totalQuantityNeededDisplay =
    totalQty !== null
      ? `${formatNumberLocale(totalQty)} ${escapeHtml(
          calculatedUnitLabel || t("units", "units")
        )}`
      : t("na", "N/A (Check Entry)");

  const dateTimeDisplay =
    treatment.scheduleLater || !treatment.date
      ? t("treatmentDetailsDateTimeUnscheduled", "To be scheduled")
      : `${formatDateLocale(treatment.date) || "?"} ${
          formatTimeLocale(treatment.time, treatment.date) || "?"
        }`;
  const statusDisplay = getStatusText(treatment).replace(/[()]/g, "").trim();
  const notesDisplay = escapeHtml(treatment.notes || t("na", "N/A"));

  let multiplierWarning = "";
  const requiresMultiplierCheck =
    treatment.applicationUnit &&
    !treatment.applicationUnit.endsWith("/ha") &&
    treatment.applicationUnit !== "other";
  if (
    totalQty === null &&
    requiresMultiplierCheck &&
    (!treatment.appContextType || appContextValueDisplay === t("na", "N/A"))
  ) {
    multiplierWarning = `<p style="color: #dc3545; font-weight: bold; font-size: 0.9em;"><i class="fas fa-exclamation-triangle"></i> ${t(
      "treatmentDetailsCalcWarning",
      "Warning: Please choose the right corresponding multiplier factor and value in the treatment entry."
    )}</p>`;
  }

  content.innerHTML = `
        <p><strong>${t(
          "treatmentDetailsFarmLabel",
          "Farm:"
        )}</strong> ${farmName}</p>
        <p><strong>${t(
          "treatmentDetailsCropLabel",
          "Crop:"
        )}</strong> ${translatedTreatmentCrop}</p>
        <p><strong>${t(
          "treatmentDetailsPestLabel",
          "Pest/Disease:"
        )}</strong> ${pestDisplay}</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
        <p><strong>${t(
          "treatmentDetailsProductLabel",
          "Product:"
        )}</strong> ${productNameDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsRecRateLabel",
          "Product Rec. Rate:"
        )}</strong> ${escapeHtml(productRates)}</p>
        <p><strong>${t(
          "treatmentDetailsDoseAppliedLabel",
          "Dose Applied:"
        )}</strong> ${doseAppliedDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsMultiplierFactorLabel",
          "Multiplier Factor:"
        )}</strong> ${appContextTypeDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsMultiplierValueLabel",
          "Multiplier Value:"
        )}</strong> ${appContextValueDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsSurfaceLabel",
          "Total Surface Treated:"
        )}</strong> ${totalSurfaceDisplay}</p>
        ${multiplierWarning}
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
        <p><strong>${t(
          "treatmentDetailsQtyPerHaLabel",
          "Calculated Quantity per ha:"
        )}</strong> ${quantityPerHaDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsTotalQtyLabel",
          "Calculated Total Quantity:"
        )}</strong> ${totalQuantityNeededDisplay}</p> 
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
        <p><strong>${t(
          "treatmentDetailsDateTimeLabel",
          "Date/Time:"
        )}</strong> ${dateTimeDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsStatusLabel",
          "Status:"
        )}</strong> ${statusDisplay}</p>
        <p><strong>${t(
          "treatmentDetailsNotesLabel",
          "Notes:"
        )}</strong> ${notesDisplay}</p>`;

  const calendarModalZ = parseInt(
    document.getElementById("calendarDayModal")?.style.zIndex || "0"
  );
  modal.style.zIndex = Math.max(BASE_MODAL_ZINDEX, calendarModalZ) + 5;
  modal.style.display = "block";
}

function confirmDeleteTreatment(treatmentId) {
  const modal = document.getElementById("deleteTreatmentConfirmModal");
  const treatment = getLocalStorage("treatments").find(
    (t) => t && t.id === treatmentId
  );
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (modal && treatment) {
    const productNameDisplay = treatment.productName
      ? escapeHtml(treatment.productName)
      : t("treatmentDetailsProductNone", "Other (Not Listed)");
    const dateDisplay =
      treatment.scheduleLater || !treatment.date
        ? t("treatmentDetailsDateTimeUnscheduled", "unscheduled")
        : `on ${formatDateLocale(treatment.date)}`;
    const heading = modal.querySelector("h2");
    const defaultTitle = t(
      "deleteTreatmentConfirmTitle",
      "Are you sure you want to delete this treatment?"
    );
    const nameTitle = t(
      "deleteTreatmentConfirmTitleWithName",
      'Delete treatment "{productName}" ({date})?'
    )
      .replace("{productName}", productNameDisplay)
      .replace("{date}", dateDisplay);
    if (heading) heading.textContent = nameTitle || defaultTitle;
    modal.dataset.treatmentIdToDelete = treatmentId;
    const calendarModalZ = parseInt(
      document.getElementById("calendarDayModal")?.style.zIndex || "0"
    );
    modal.style.zIndex = Math.max(BASE_MODAL_ZINDEX, calendarModalZ) + 10;
    modal.style.display = "block";
  } else if (!treatment) {
    alert(t("treatmentNotFound", "Treatment not found. Cannot delete."));
  } else {
    console.error("Delete treatment confirmation modal not found.");
  }
}
function handleDeleteTreatment() {
  const confirmModal = document.getElementById("deleteTreatmentConfirmModal");
  if (!confirmModal || !confirmModal.dataset.treatmentIdToDelete) return;
  const treatmentIdToDelete = parseInt(
    confirmModal.dataset.treatmentIdToDelete
  );
  if (!treatmentIdToDelete) return;
  let treatments = getLocalStorage("treatments");
  const treatmentIndex = treatments.findIndex(
    (t) => t && t.id === treatmentIdToDelete
  );
  let originalDate = null;
  if (treatmentIndex !== -1) {
    const treatmentToDelete = treatments[treatmentIndex];
    originalDate = treatmentToDelete.date;
    if (activeTimeouts[treatmentIdToDelete]) {
      clearTimeout(activeTimeouts[treatmentIdToDelete]);
      delete activeTimeouts[treatmentIdToDelete];
    }
    treatments.splice(treatmentIndex, 1);
    setLocalStorage("treatments", treatments);
    console.log(`Deleted Treatment ID: ${treatmentIdToDelete}`);
    closeModal(confirmModal);
    renderFarmList();
    renderCalendar();
    generateReport();
    renderSupplyList();
    scheduleNotifications();
    refreshCalendarDayModalIfNeeded(
      originalDate,
      null,
      treatmentIdToDelete,
      true
    );
  } else {
    closeModal(confirmModal);
    console.warn("Treatment to delete not found:", treatmentIdToDelete);
    alert(
      translations[currentLang]?.treatmentNotFound ||
        "Treatment could not be found for deletion."
    );
  }
}
function togglePestPastTreatmentsView(pestId, buttonElement) {
  const pestItem = buttonElement.closest(".farm-pest-disease-item");
  if (!pestItem) return;
  const pastListContainer = pestItem.querySelector(`#pest-${pestId}-past`);
  if (!pastListContainer || !buttonElement) {
    console.error(
      `Past treatment container or button not found for pest ${pestId}`
    );
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  const viewText = t("planningViewPastBtn", "View Past Treatments");
  const hideText = t("planningHidePastBtn", "Hide Past Treatments");
  const isVisible = pastListContainer.style.display === "block";
  if (isVisible) {
    pastListContainer.style.display = "none";
    buttonElement.textContent = buttonElement.textContent.replace(
      hideText,
      viewText
    );
  } else {
    renderPestPastTreatmentList(pestId);
    pastListContainer.style.display = "block";
    buttonElement.textContent = buttonElement.textContent.replace(
      viewText,
      hideText
    );
  }
}
function renderPestPastTreatmentList(pestId) {
  const pastContainer = document.getElementById(`pest-${pestId}-past`);
  if (!pastContainer) return;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  pastContainer.innerHTML = `<h4>${t(
    "planningPastTreatmentsTitle",
    "Past Treatments:"
  )}</h4><div class="past-treatment-legend"><span><i class="fas fa-check-circle legend-icon completed"></i> ${t(
    "planningPastLegendCompleted",
    "Completed"
  )}</span><span><i class="fas fa-exclamation-triangle legend-icon missed"></i> ${t(
    "planningPastLegendMissed",
    "Missed"
  )}</span></div>`;
  const allTreatments = getLocalStorage("treatments");
  const pastTreatmentsForPest = allTreatments
    .filter(
      (t) =>
        t &&
        t.pestDiseaseId === pestId &&
        !t.scheduleLater &&
        t.date &&
        (t.status === "completed" || isPast(t))
    )
    .sort((a, b) => {
      try {
        const dateA = new Date(`${a.date}T${a.time || "00:00"}`);
        const dateB = new Date(`${b.date}T${b.time || "00:00"}`);
        if (isNaN(dateA.getTime())) return 1;
        if (isNaN(dateB.getTime())) return -1;
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  if (pastTreatmentsForPest.length > 0) {
    pastTreatmentsForPest.forEach((treatment) => {
      const itemDiv = renderNestedTreatmentItem(treatment);
      if (itemDiv) pastContainer.appendChild(itemDiv);
    });
  } else {
    pastContainer.insertAdjacentHTML(
      "beforeend",
      `<p style="font-style: italic; font-size: 0.9em; color: #666;">${t(
        "planningNoPastTreatmentsMsg",
        "No past scheduled treatments found for this pest."
      )}</p>`
    );
  }
}

// --- Treatment Calculation Functions ---
function updateAppContextValuePlaceholder() {
  const typeSelect = document.getElementById("treatmentAppContextType");
  const valueInput = document.getElementById("treatmentAppContextValue");
  if (!typeSelect || !valueInput) return;
  const selectedType = typeSelect.value;
  let placeholderKey = "factorValuePlaceholder";
  switch (selectedType) {
    case "applicators_ha":
      placeholderKey = "factorValuePlaceholderApp";
      break;
    case "plants_ha":
      placeholderKey = "factorValuePlaceholderPlant";
      break;
    case "total_weight":
      placeholderKey = "factorValuePlaceholderWeight";
      break;
    case "total_volume":
      placeholderKey = "factorValuePlaceholderVol";
      break;
    case "units":
      placeholderKey = "factorValuePlaceholderUnits";
      break;
  }
  valueInput.placeholder =
    translations[currentLang]?.[placeholderKey] || "Enter value...";
}
function getTreatmentModalInputs() {
  const form = document.getElementById("treatmentForm");
  if (!form) return null;
  return {
    doseInput: form.querySelector("#treatmentDose"),
    doseUnitSelect: form.querySelector("#treatmentDoseUnit"),
    appContextTypeSelect: form.querySelector("#treatmentAppContextType"),
    appContextValueInput: form.querySelector("#treatmentAppContextValue"),
    totalSurfaceInput: form.querySelector("#treatmentTotalSurface"),
    quantityPerHaOutput: form.querySelector("#treatmentQuantityPerHa"),
    totalQuantityNeededOutput: form.querySelector(
      "#treatmentTotalQuantityNeeded"
    ),
    multiplierWarningDiv: form.querySelector("#treatmentMultiplierWarning")
  };
}
function calculateTreatmentQuantities() {
  const elements = getTreatmentModalInputs();
  if (!elements) {
    console.error("Cannot calculate: Treatment modal elements not found.");
    return;
  }
  const {
    doseInput,
    doseUnitSelect,
    appContextTypeSelect,
    appContextValueInput,
    totalSurfaceInput,
    quantityPerHaOutput,
    totalQuantityNeededOutput,
    multiplierWarningDiv
  } = elements;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  if (multiplierWarningDiv) multiplierWarningDiv.style.display = "none";

  const dose = parseFloat(doseInput.value);
  const doseUnit = doseUnitSelect.value;
  const appContextType = appContextTypeSelect.value;
  const appContextValue = parseFloat(appContextValueInput.value);
  const totalSurface = parseFloat(totalSurfaceInput.value);

  quantityPerHaOutput.value = t("na", "N/A");
  totalQuantityNeededOutput.value = t("na", "N/A");

  if (isNaN(dose) || dose < 0 || doseInput.disabled || !doseUnit) {
    if (!isNaN(dose) && dose >= 0 && !doseUnit && !doseInput.disabled) {
      quantityPerHaOutput.value = t(
        "supplyCalcQtyErrorSelectUnit",
        "Select Unit"
      );
      totalQuantityNeededOutput.value = t(
        "supplyCalcQtyErrorSelectUnit",
        "Select Unit"
      );
    }
    return;
  }

  let qtyPerHa = null;
  let baseUnitLabel = getBaseUnit(doseUnit);
  if (doseUnit === "tablet/unit") {
    baseUnitLabel =
      currentLang === "fr"
        ? dose === 1 || dose === 0
          ? "comprimé"
          : "comprimés"
        : dose === 1 || dose === 0
        ? "tablet"
        : "tablets";
  }

  const requiresMultiplier = !doseUnit.endsWith("/ha") && doseUnit !== "other";
  const showMultiplierWarning = (
    messageKey = "treatmentMultiplierGeneralWarning",
    fallbackMsg = "Please select the correct Multiplier Factor & enter its Value."
  ) => {
    if (multiplierWarningDiv) {
      multiplierWarningDiv.textContent = t(messageKey, fallbackMsg);
      multiplierWarningDiv.style.display = "block";
    }
    quantityPerHaOutput.value = t("na", "N/A");
    totalQuantityNeededOutput.value = t("na", "N/A");
  };

  try {
    if (doseUnit.endsWith("/ha")) {
      qtyPerHa = dose;
    } else if (doseUnit.endsWith("/applicator")) {
      if (
        appContextType === "applicators_ha" &&
        !isNaN(appContextValue) &&
        appContextValue > 0
      ) {
        qtyPerHa = dose * appContextValue;
      } else {
        if (requiresMultiplier) {
          showMultiplierWarning();
          return;
        }
      }
    } else if (doseUnit.endsWith("/plant")) {
      if (
        appContextType === "plants_ha" &&
        !isNaN(appContextValue) &&
        appContextValue > 0
      ) {
        qtyPerHa = dose * appContextValue;
      } else {
        if (requiresMultiplier) {
          showMultiplierWarning();
          return;
        }
      }
    } else if (doseUnit.endsWith("/unit")) {
      if (
        appContextType === "units" &&
        !isNaN(appContextValue) &&
        appContextValue > 0
      ) {
        qtyPerHa = dose * appContextValue;
      } else {
        if (requiresMultiplier) {
          showMultiplierWarning();
          return;
        }
      }
    } else if (doseUnit.endsWith("/kg")) {
      if (
        appContextType === "total_weight" &&
        !isNaN(appContextValue) &&
        appContextValue > 0
      ) {
        qtyPerHa = dose * appContextValue;
      } else {
        if (requiresMultiplier) {
          showMultiplierWarning(
            "treatmentMultiplierFactorValueWarning",
            "Need Factor (Total weight/ha) & Value"
          );
          return;
        }
      }
    } else if (doseUnit.endsWith("/L")) {
      if (
        appContextType === "total_volume" &&
        !isNaN(appContextValue) &&
        appContextValue > 0
      ) {
        qtyPerHa = dose * appContextValue;
      } else {
        if (requiresMultiplier) {
          showMultiplierWarning(
            "treatmentMultiplierFactorValueWarning",
            "Need Factor (Total volume/ha) & Value"
          );
          return;
        }
      }
    } else if (doseUnit === "other") {
      quantityPerHaOutput.value = t("supplyCalcRateError", "N/A (Other Unit)");
      totalQuantityNeededOutput.value = t("na", "N/A");
      return;
    }
  } catch (calcError) {
    console.error("Error during per-ha calculation:", calcError);
    showMultiplierWarning(
      "treatmentMultiplierFactorValueError",
      "Calculation error occurred."
    );
    return;
  }

  if (qtyPerHa !== null && !isNaN(qtyPerHa)) {
    quantityPerHaOutput.value = `${formatNumberLocale(
      qtyPerHa
    )} ${baseUnitLabel}/ha`;
    if (!isNaN(totalSurface) && totalSurface >= 0) {
      const totalQtyNeeded = qtyPerHa * totalSurface;
      totalQuantityNeededOutput.value = `${formatNumberLocale(
        totalQtyNeeded
      )} ${baseUnitLabel}`;
    } else {
      totalQuantityNeededOutput.value = t(
        "supplyCalcQtyErrorEnterSurface",
        "Enter Surface Area"
      );
    }
  }
}
function calculateQuantitiesFromTreatmentData(treatment) {
  const {
    applicationDose: dose,
    applicationUnit: doseUnit,
    appContextType,
    appContextValue,
    totalSurface
  } = treatment || {};
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  let qtyPerHa = null;
  let totalQty = null;
  let unitLabel = getBaseUnit(doseUnit || "");
  if (
    dose === null ||
    typeof dose !== "number" ||
    isNaN(dose) ||
    dose < 0 ||
    !doseUnit ||
    doseUnit === "other"
  ) {
    return { qtyPerHa: null, totalQty: null, unitLabel: t("units", "units") };
  }
  const requiresMultiplier = !doseUnit.endsWith("/ha");
  const multiplierProvided =
    appContextType &&
    appContextValue !== null &&
    typeof appContextValue === "number" &&
    !isNaN(appContextValue) &&
    appContextValue > 0;
  const surfaceValid =
    totalSurface !== null &&
    typeof totalSurface === "number" &&
    !isNaN(totalSurface) &&
    totalSurface >= 0;
  const surfaceRequiredForPerHa =
    doseUnit.endsWith("/kg") || doseUnit.endsWith("/L");
  if (requiresMultiplier && !multiplierProvided) {
    return { qtyPerHa: null, totalQty: null, unitLabel };
  }
  if (surfaceRequiredForPerHa && (!surfaceValid || totalSurface === 0)) {
    return { qtyPerHa: null, totalQty: null, unitLabel };
  }
  try {
    if (doseUnit.endsWith("/ha")) {
      qtyPerHa = dose;
    } else if (doseUnit.endsWith("/applicator")) {
      if (appContextType === "applicators_ha")
        qtyPerHa = dose * appContextValue;
      else qtyPerHa = null;
    } else if (doseUnit.endsWith("/plant")) {
      if (appContextType === "plants_ha") qtyPerHa = dose * appContextValue;
      else qtyPerHa = null;
    } else if (doseUnit.endsWith("/kg")) {
      if (appContextType === "total_weight")
        qtyPerHa = (dose * appContextValue) / totalSurface;
      else qtyPerHa = null;
    } else if (doseUnit.endsWith("/L")) {
      if (appContextType === "total_volume")
        qtyPerHa = (dose * appContextValue) / totalSurface;
      else qtyPerHa = null;
    } else if (doseUnit === "units") {
      if (appContextType === "units") qtyPerHa = dose * appContextValue;
      else qtyPerHa = null;
    }
    if (qtyPerHa === null || isNaN(qtyPerHa)) {
      return { qtyPerHa: null, totalQty: null, unitLabel };
    }
    if (surfaceValid) {
      totalQty = qtyPerHa * totalSurface;
    } else {
      totalQty = null;
    }
  } catch (calcError) {
    console.error(
      `Error calculating quantity for treatment ${treatment.id}:`,
      calcError
    );
    qtyPerHa = null;
    totalQty = null;
  }
  if (totalQty === null && surfaceValid && qtyPerHa !== null) {
    qtyPerHa = null;
  }
  return { qtyPerHa, totalQty, unitLabel };
}

// --- Calendar Section ---
function navigateCalendar(monthOffset) {
  return () => {
    currentMonth += monthOffset;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  };
}
function renderCalendar() {
  const treatments = getLocalStorage("treatments");
  const calendarContainer = document.getElementById("calendar");
  const monthYearElement = document.getElementById("currentMonthYear");
  if (!calendarContainer || !monthYearElement) {
    console.error("Calendar container or month/year element not found.");
    return;
  }
  calendarContainer.innerHTML = "";
  monthYearElement.textContent = `${monthNamesLocalized[currentMonth]} ${currentYear}`;
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  let firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7;
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="empty-cell"></div>'
    );
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    dayCell.dataset.date = dateString;
    dayCell.innerHTML = `<span>${day}</span>`;
    const treatmentsToday = treatments.filter(
      (t) => t && t.date === dateString && !t.scheduleLater
    );
    if (treatmentsToday.length > 0) {
      const hasMissed = treatmentsToday.some(
        (t) => t.status !== "completed" && isPast(t)
      );
      const hasCompleted = treatmentsToday.every(
        (t) => t.status === "completed"
      );
      if (hasMissed) {
        dayCell.classList.add("has-missed-treatment");
      } else if (hasCompleted) {
        dayCell.classList.add("has-completed-treatment");
      } else {
        dayCell.classList.add("has-treatment");
      }
    }
    calendarContainer.appendChild(dayCell);
  }
  const totalCells = firstDayWeekday + daysInMonth;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  for (let i = 0; i < remainingCells; i++) {
    calendarContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="empty-cell"></div>'
    );
  }
}
function showCalendarDayDetails(dateString) {
  const treatments = getLocalStorage("treatments");
  const farms = getLocalStorage("farms");
  const modal = document.getElementById("calendarDayModal");
  const detailsContainer = document.getElementById("calendarDayDetails");
  const modalTitle = document.getElementById("calendarDayTitle");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!modal || !detailsContainer || !modalTitle) {
    console.error("Calendar day modal or its inner elements not found.");
    return;
  }
  modal.dataset.displayedDate = dateString;
  const treatmentsToday = treatments
    .filter((t) => t && t.date === dateString && !t.scheduleLater)
    .sort((a, b) => (a.time || "00:00").localeCompare(b.time || "00:00"));
  detailsContainer.innerHTML = "";
  try {
    const [year, month, day] = dateString.split("-").map(Number);
    const dateObject = new Date(Date.UTC(year, month - 1, day));
    if (isNaN(dateObject.getTime())) throw new Error("Invalid date parsed");
    const locale =
      currentLang && navigator.languages?.includes(currentLang)
        ? currentLang
        : undefined;
    const formattedDate = dateObject.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
    modalTitle.textContent = `${t(
      "calendarDayTitlePrefix",
      "Treatments for"
    )} ${formattedDate}`;
  } catch (e) {
    console.error("Error formatting date for calendar modal title:", e);
    modalTitle.textContent = t(
      "calendarDayTitleDefault",
      "Treatments Scheduled"
    );
  }
  if (treatmentsToday.length > 0) {
    const list = document.createElement("ul");
    treatmentsToday.forEach((treat) => {
      if (!treat || !treat.id) return;
      const statusClass = getTreatmentStatusClass(treat);
      const farm = farms.find((f) => f && f.id === treat.farmId);
      const farmName = farm ? farm.name : t("farmDetailsTitle", "Unknown Farm");
      const productNameDisplay = treat.productName
        ? escapeHtml(treat.productName)
        : t("treatmentDetailsProductNone", "Other (Not Listed)");
      const timeDisplay =
        formatTimeLocale(treat.time, treat.date) || t("na", "N/A");
      const li = document.createElement("li");
      if (statusClass) li.classList.add(statusClass);
      li.dataset.treatmentId = treat.id;
      const infoSpan = document.createElement("span");
      infoSpan.innerHTML = `${getStatusIcon(
        treat,
        true
      )} ${productNameDisplay} in ${escapeHtml(farmName)} - ${timeDisplay}`;
      li.appendChild(infoSpan);
      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("list-item-actions");
      const completeTitle = t("markCompleteBtnTitle", "Mark as Completed");
      const unmarkTitle = t("unmarkCompleteBtnTitle", "Unmark Completed");
      const detailsTitle = t("detailsBtnTitle", "Details");
      const editTitle = t("editBtnTitle", "Edit");
      const deleteTitle = t("deleteBtnTitle", "Delete");
      const toggleCompleteBtn =
        treat.status === "completed"
          ? `<button class="unmark-btn" data-translate-title="unmarkCompleteBtnTitle" title="${unmarkTitle}"><i class="fas fa-undo"></i></button>`
          : `<button class="complete-btn" data-translate-title="markCompleteBtnTitle" title="${completeTitle}"><i class="fas fa-check"></i></button>`;
      actionsDiv.innerHTML = `${toggleCompleteBtn}<button class="details-btn" data-translate-title="detailsBtnTitle" title="${detailsTitle}"><i class="fas fa-info-circle"></i></button><button class="edit-btn" data-translate-title="editBtnTitle" title="${editTitle}"><i class="fas fa-edit"></i></button><button class="delete-btn" data-translate-title="deleteBtnTitle" title="${deleteTitle}"><i class="fas fa-trash-alt"></i></button>`;
      li.appendChild(actionsDiv);
      list.appendChild(li);
    });
    detailsContainer.appendChild(list);
  } else {
    detailsContainer.innerHTML = `<p>${t(
      "calendarDayNoTreatments",
      "No treatments scheduled for this day."
    )}</p>`;
  }
  modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
  modal.style.display = "block";
}
function refreshCalendarDayModalIfNeeded(
  originalDate,
  newDate,
  treatmentId,
  wasEditOrDelete = false
) {
  const calendarModal = document.getElementById("calendarDayModal");
  if (!calendarModal || calendarModal.style.display !== "block") return;
  const displayedDate = calendarModal.dataset.displayedDate;
  if (displayedDate === originalDate || displayedDate === newDate) {
    showCalendarDayDetails(displayedDate);
  }
  if (wasEditOrDelete && originalDate && displayedDate === originalDate) {
    const treatmentsLeftOnOriginalDate = getLocalStorage("treatments").some(
      (t) => t && t.date === originalDate && !t.scheduleLater
    );
    if (!treatmentsLeftOnOriginalDate) {
      closeModal(calendarModal);
    }
  }
}

// --- Report Section ---
function generateReport() {
  const reportContentContainer = document.getElementById("reportContent");
  const farms = getLocalStorage("farms");
  const pests = getLocalStorage("pestsDiseases");
  const treatments = getLocalStorage("treatments");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!reportContentContainer) {
    console.error("Report content container #reportContent not found.");
    return;
  }
  reportContentContainer.innerHTML = "";
  if (farms.length === 0) {
    reportContentContainer.innerHTML = `<p>${t(
      "reportEmptyMsg",
      "No farms added yet. Add farms and treatments to generate a report."
    )}</p>`;
    attachReportButtonListener();
    return;
  }
  const generationDateTime = getFormattedDateTime();
  farms.sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
  const severityOrderReport = { high: 3, medium: 2, low: 1, none: 0 };
  const getSeverityScoreReport = (severity = "none") =>
    severityOrderReport[severity.toLowerCase()] ?? 0;
  farms.forEach((farm) => {
    if (!farm || !farm.id) return;
    const farmReportItem = document.createElement("div");
    farmReportItem.className = "farm-report-item";
    const toggleButton = document.createElement("button");
    toggleButton.className = "farm-report-toggle";
    toggleButton.textContent = escapeHtml(farm.name || "Unnamed Farm");
    toggleButton.innerHTML += ' <i class="fas fa-caret-right toggle-icon"></i>';
    const contentDiv = document.createElement("div");
    contentDiv.className = "farm-report-content";
    contentDiv.style.display = "none";
    let farmReportHtml = "";
    const farmSize =
      typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
        ? farm.farmSize
        : null;
    const farmSizeDisplay =
      farmSize !== null ? `${formatNumberLocale(farmSize)} ha` : t("na", "N/A");
    const plantingDate = farm.plantingDate
      ? formatDateLocale(farm.plantingDate)
      : t("na", "N/A");
    const harvestDate = farm.harvestDate
      ? formatDateLocale(farm.harvestDate)
      : t("na", "N/A");
    const translatedReportCrop =
      translations[currentLang]?.[farm.crop] ||
      escapeHtml(farm.crop || t("na", "N/A"));

    farmReportHtml += `<h4>${escapeHtml(farm.name)} ${t(
      "reportFarmTitleSuffix",
      "- Activities Report"
    )}</h4>`;
    farmReportHtml += `<p><strong>${t(
      "reportLocationLabel",
      "Location:"
    )}</strong> ${escapeHtml(farm.location || t("na", "N/A"))}</p>`;
    farmReportHtml += `<p><strong>${t(
      "reportSizeLabel",
      "Size (ha):"
    )}</strong> ${farmSizeDisplay}</p>`;
    farmReportHtml += `<p><strong>${t(
      "reportCropLabel",
      "Crop:"
    )}</strong> ${translatedReportCrop}</p>`;
    farmReportHtml += `<p><strong>${t(
      "reportPlantingDateLabel",
      "Planting Date:"
    )}</strong> ${plantingDate}</p>`;
    farmReportHtml += `<p><strong>${t(
      "reportHarvestDateLabel",
      "Expected Harvest:"
    )}</strong> ${harvestDate}</p>`;
    const relatedPests = pests
      .filter((pd) => pd && pd.farmId === farm.id)
      .sort((a, b) => {
        const scoreA = getSeverityScoreReport(a.severity);
        const scoreB = getSeverityScoreReport(b.severity);
        if (scoreB !== scoreA) return scoreB - scoreA;
        return (a.name || "").localeCompare(b.name || "");
      });
    farmReportHtml += `<h5>${t(
      "reportPestsReportedLabel",
      "Pests/Diseases reported"
    )} (${relatedPests.length}):</h5>`;
    if (relatedPests.length > 0) {
      farmReportHtml += '<ul style="padding-left: 15px;">';
      relatedPests.forEach((pd) => {
        if (!pd || !pd.id) return;
        const severityClassReport = escapeHtml(
          pd.severity?.toLowerCase() || "none"
        );
        const severityText = t(
          `severity${
            pd.severity?.charAt(0).toUpperCase() +
              pd.severity?.slice(1).toLowerCase() || "None"
          }`,
          pd.severity || "N/A"
        );

        let categoryTextForReport;
        if (pd.category === "unknown") {
          categoryTextForReport = currentLang === "fr" ? "Inconnu" : "unknown";
        } else {
          categoryTextForReport = t(
            `pestType${
              pd.category?.charAt(0).toUpperCase() +
                pd.category?.slice(1).toLowerCase() || "Other"
            }`,
            pd.category || "N/A"
          );
        }

        farmReportHtml += `<li style="margin-bottom: 15px;">`;
        farmReportHtml += `<span class="severity-indicator ${severityClassReport}"></span><strong>${escapeHtml(
          pd.name
        )} (${categoryTextForReport})</strong> - ${t(
          "severityLabel",
          "Severity:"
        )} ${severityText}`;
        if (pd.observations) {
          farmReportHtml += `<br><small><em>${t(
            "reportObsLabel",
            "Obs:"
          )} ${escapeHtml(pd.observations)}</em></small>`;
        }
        const completedTreatmentsForPest = treatments
          .filter(
            (treat) =>
              treat &&
              treat.pestDiseaseId === pd.id &&
              treat.farmId === farm.id &&
              treat.status === "completed"
          )
          .sort((a, b) => {
            try {
              const dateA = new Date(`${a.date}T${a.time || "00:00"}`);
              const dateB = new Date(`${b.date}T${b.time || "00:00"}`);
              if (isNaN(dateA.getTime())) return 1;
              if (isNaN(dateB.getTime())) return -1;
              return dateA - dateB;
            } catch {
              return 0;
            }
          });
        if (completedTreatmentsForPest.length > 0) {
          farmReportHtml += `<h5 style="margin-left: 10px; margin-top: 8px; margin-bottom: 2px; font-size: 0.95em;">${t(
            "reportTreatmentsCompletedLabel",
            "Treatments Completed"
          )} (${completedTreatmentsForPest.length}):</h5>`;
          farmReportHtml += `<small style="margin-left: 10px; display: block; font-size: 0.8em; color: #666; margin-bottom: 5px;"><em>${t(
            "reportCompletedHeader",
            "Date | Product | Surface treated | Application rate applied | Total quantity applied"
          )}</em></small>`;
          farmReportHtml +=
            '<ul class="completed-treatments-list" style="margin-left: 10px; padding-left: 5px;">';
          let pestTotalCalcError = false;
          completedTreatmentsForPest.forEach((treat) => {
            const dateDisplay = formatDateLocale(treat.date) || t("na", "N/A");
            const productDisplay = treat.productName
              ? escapeHtml(treat.productName)
              : t("treatmentDetailsProductNone", "Other (Not Listed)");
            const surfaceAreaTreated =
              treat.totalSurface !== null &&
              typeof treat.totalSurface === "number" &&
              !isNaN(treat.totalSurface)
                ? treat.totalSurface
                : farmSize;
            const surfaceDisplay =
              surfaceAreaTreated !== null
                ? `${formatNumberLocale(surfaceAreaTreated)} ha`
                : t("na", "N/A");
            let rateDisplay = t("na", "N/A");
            if (
              treat.applicationDose !== null &&
              typeof treat.applicationDose === "number" &&
              !isNaN(treat.applicationDose)
            ) {
              rateDisplay = `${formatNumberLocale(
                treat.applicationDose
              )} ${escapeHtml(treat.applicationUnit || "")}`;
            } else if (treat.productName === null) {
              rateDisplay = t("treatmentDetailsDoseNone", "N/A (No Product)");
            }
            const {
              totalQty,
              unitLabel
            } = calculateQuantitiesFromTreatmentData(treat);
            if (totalQty === null) pestTotalCalcError = true;
            const totalQtyDisplay =
              totalQty !== null
                ? `${formatNumberLocale(totalQty)} ${escapeHtml(unitLabel)}`
                : t("na", "N/A (Check Entry)");
            farmReportHtml += `<li>${dateDisplay} | ${productDisplay} | ${surfaceDisplay} | ${rateDisplay} | ${totalQtyDisplay}</li>`;
          });
          farmReportHtml += "</ul>";
          const productsUsedForPest = {};
          completedTreatmentsForPest.forEach((treat) => {
            const productName =
              treat.productName ||
              t("treatmentDetailsProductNone", "Other (Not Listed)");
            if (!productsUsedForPest[productName]) {
              productsUsedForPest[productName] = {
                count: 0,
                totalQty: 0,
                units: new Set(),
                displayUnit: t("units", "units"),
                isMixed: false,
                hasError: false
              };
            }
            productsUsedForPest[productName].count++;
            const {
              totalQty: calculatedTotalQty,
              unitLabel
            } = calculateQuantitiesFromTreatmentData(treat);
            if (calculatedTotalQty !== null) {
              productsUsedForPest[productName].totalQty += calculatedTotalQty;
              if (unitLabel !== t("units", "units")) {
                productsUsedForPest[productName].units.add(unitLabel);
              }
            } else {
              productsUsedForPest[productName].hasError = true;
            }
          });
          Object.keys(productsUsedForPest).forEach((productName) => {
            const summary = productsUsedForPest[productName];
            const validUnits = Array.from(summary.units);
            if (validUnits.length === 1) {
              summary.displayUnit = validUnits[0];
              summary.isMixed = false;
            } else if (validUnits.length > 1) {
              summary.displayUnit = `${validUnits[0]} ${t(
                "inventoryMixedUnitsWarning",
                "(mixed units)"
              )}`;
              summary.isMixed = true;
            } else {
              const productDef = getProducts().find(
                (p) => p.name === productName
              );
              if (productDef && productDef.rate && productDef.rate !== "N/A") {
                const rateParts = productDef.rate.split("/");
                const potentialUnit = getBaseUnit(rateParts[0] || "units");
                summary.displayUnit =
                  potentialUnit !== t("units", "units")
                    ? potentialUnit
                    : t("units", "units");
              } else {
                summary.displayUnit = t("units", "units");
              }
              summary.isMixed = false;
            }
          });
          const uniquePestProductsCount = Object.keys(productsUsedForPest)
            .length;
          if (uniquePestProductsCount > 0) {
            farmReportHtml += `<h5 style="margin-left: 10px; margin-top: 10px; margin-bottom: 2px; font-size: 0.9em;">${t(
              "reportProductsUsedLabel",
              "Products used"
            )} (${uniquePestProductsCount}):</h5>`;
            if (pestTotalCalcError) {
              farmReportHtml += `<small style="margin-left: 10px; color: #dc3545; display: block; font-size: 0.8em; margin-bottom: 5px;"><em>${t(
                "reportCalcErrorNote",
                "Note: Some quantities could not be calculated due to missing info. Totals may be inaccurate."
              )}</em></small>`;
            }
            farmReportHtml +=
              '<ul class="products-used-summary-list" style="margin-left: 10px; padding-left: 5px;">';
            const sortedPestProductNames = Object.keys(
              productsUsedForPest
            ).sort((a, b) => a.localeCompare(b));
            sortedPestProductNames.forEach((productName) => {
              const summary = productsUsedForPest[productName];
              const treatmentCountText =
                summary.count === 1
                  ? `1 ${t("inventoryTreatmentsSuffix", "Treatment")}`
                  : `${summary.count} ${t(
                      "inventoryTreatmentsSuffix",
                      "Treatments"
                    )}`;
              const totalQtyFormatted = summary.hasError
                ? t("na", "N/A (Error)")
                : summary.totalQty > 0 || summary.count > 0
                ? formatNumberLocale(summary.totalQty)
                : t("na", "N/A");
              const unitHtml = `<span class="${
                summary.isMixed ? "unit-mixed-warning" : ""
              }">${escapeHtml(summary.displayUnit)}</span>`;
              farmReportHtml += `<li>${escapeHtml(
                productName
              )} | ${treatmentCountText} | ${totalQtyFormatted} ${unitHtml} ${t(
                "reportProductUsedLine",
                "used"
              )}</li>`;
            });
            farmReportHtml += "</ul>";
          }
        } else {
          farmReportHtml += `<small style="margin-left: 10px; display: block; margin-top: 5px;"><em>${t(
            "reportNoCompletedTreatments",
            "No completed treatments linked to this specific pest/disease."
          )}</em></small>`;
        }
        farmReportHtml += "</li>";
      });
      farmReportHtml += "</ul>";
    } else {
      farmReportHtml += `<p><em>${t(
        "reportNoneReported",
        "None reported for this farm."
      )}</em></p>`;
    }
    farmReportHtml += `<p class="report-footer">${t(
      "reportFooter1",
      "Report generated through iGrow by AgricAdvisors Mobile App on"
    )} ${generationDateTime}</p>`;
    contentDiv.innerHTML = farmReportHtml;
    farmReportItem.appendChild(toggleButton);
    farmReportItem.appendChild(contentDiv);
    reportContentContainer.appendChild(farmReportItem);
  });
  attachReportButtonListener();
}
function attachReportButtonListener() {
  const updateButton = document.getElementById("generateReportBtn");
  if (updateButton && !updateButton.hasAttribute("data-click-listener")) {
    updateButton.addEventListener("click", generateReport);
    updateButton.setAttribute("data-click-listener", "true");
  }
}

// --- Inventory Section ---
function calculateTotalQuantityNeededForProduct(productName) {
  const treatments = getLocalStorage("treatments");
  let totalNeeded = 0;
  let displayUnit = translations[currentLang]?.units || "units";
  let firstValidUnitFound = null;
  let isMixed = false;
  let calculationPossible = true;
  const relevantTreatments = treatments.filter(
    (t) => t && t.productName === productName && t.status !== "completed"
  );
  relevantTreatments.forEach((t) => {
    const { totalQty, unitLabel } = calculateQuantitiesFromTreatmentData(t);
    if (totalQty !== null) {
      totalNeeded += totalQty;
      if (unitLabel !== (translations[currentLang]?.units || "units")) {
        if (firstValidUnitFound === null) {
          firstValidUnitFound = unitLabel;
          displayUnit = firstValidUnitFound;
        } else if (unitLabel !== firstValidUnitFound) {
          isMixed = true;
        }
      }
    } else {
      calculationPossible = false;
    }
  });
  if (!calculationPossible) {
    totalNeeded = null;
    displayUnit = translations[currentLang]?.units || "units";
    isMixed = false;
  } else if (isMixed) {
    displayUnit = `${
      firstValidUnitFound || translations[currentLang]?.units || "units"
    } ${
      translations[currentLang]?.inventoryMixedUnitsWarning || "(mixed units)"
    }`;
  }
  return { totalNeeded, unit: displayUnit, isMixed };
}
function calculateTotalQuantityUsedForProduct(productName) {
  const treatments = getLocalStorage("treatments");
  let totalUsed = 0;
  let displayUnit = translations[currentLang]?.units || "units";
  let firstValidUnitFound = null;
  let isMixed = false;
  let calculationPossible = true;
  const relevantTreatments = treatments.filter(
    (t) => t && t.productName === productName && t.status === "completed"
  );
  relevantTreatments.forEach((t) => {
    const { totalQty, unitLabel } = calculateQuantitiesFromTreatmentData(t);
    if (totalQty !== null) {
      totalUsed += totalQty;
      if (unitLabel !== (translations[currentLang]?.units || "units")) {
        if (firstValidUnitFound === null) {
          firstValidUnitFound = unitLabel;
          displayUnit = firstValidUnitFound;
        } else if (unitLabel !== firstValidUnitFound) {
          isMixed = true;
        }
      }
    } else {
      calculationPossible = false;
    }
  });
  if (!calculationPossible) {
    totalUsed = null;
    displayUnit = translations[currentLang]?.units || "units";
    isMixed = false;
  } else if (isMixed) {
    displayUnit = `${
      firstValidUnitFound || translations[currentLang]?.units || "units"
    } ${
      translations[currentLang]?.inventoryMixedUnitsWarning || "(mixed units)"
    }`;
  }
  return { totalUsed, unit: displayUnit, isMixed };
}
function renderSupplyList() {
  const supplyListContainer = document.getElementById("supplyList");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  if (!supplyListContainer) {
    console.error("Inventory list container #supplyList not found.");
    return;
  }
  const treatments = getLocalStorage("treatments");
  const farms = getLocalStorage("farms");
  const pestsDiseases = getLocalStorage("pestsDiseases");
  const definedProducts = getProducts();
  const productsInUse = [
    ...new Set(treatments.map((t) => t?.productName).filter(Boolean))
  ];

  supplyListContainer.innerHTML = "";
  if (productsInUse.length === 0) {
    supplyListContainer.innerHTML = `<p data-translate="inventoryEmpty">${t(
      "inventoryEmpty",
      "No products listed yet. Add treatments to populate this list."
    )}</p>`;
    return;
  }

  productsInUse.sort((a, b) => a.localeCompare(b));

  productsInUse.forEach((name) => {
    const productDiv = document.createElement("div");
    productDiv.className = "supply-list-item list-item";
    productDiv.dataset.productName = name;

    const allTreatmentsUsingThisProduct = treatments.filter(
      (t) => t?.productName === name
    );
    const neededTreatments = allTreatmentsUsingThisProduct.filter(
      (t) => t.status !== "completed"
    );
    const pastTreatments = allTreatmentsUsingThisProduct.filter(
      (t) => t.status === "completed"
    );
    const usageCount = allTreatmentsUsingThisProduct.length;
    const productDetails = definedProducts.find((p) => p.name === name);
    const totalStock =
      productDetails &&
      typeof productDetails.stock === "number" &&
      !isNaN(productDetails.stock)
        ? productDetails.stock
        : 0;

    const {
      totalNeeded,
      unit: neededUnit,
      isMixed: neededMixed
    } = calculateTotalQuantityNeededForProduct(name);
    const {
      totalUsed,
      unit: usedUnit,
      isMixed: usedMixed
    } = calculateTotalQuantityUsedForProduct(name);

    let hasInconsistentApplicationUnits = false;
    let hasOnlyOtherUnit = true;
    let hasAtLeastOneOtherUnit = false;

    if (allTreatmentsUsingThisProduct.length > 0) {
      const uniqueDefinedApplicationUnits = new Set();

      allTreatmentsUsingThisProduct.forEach((treat) => {
        if (treat.applicationUnit && treat.applicationUnit.trim() !== "") {
          if (treat.applicationUnit === "other") {
            hasAtLeastOneOtherUnit = true;
          } else {
            uniqueDefinedApplicationUnits.add(treat.applicationUnit);
            hasOnlyOtherUnit = false;
          }
        }
      });

      if (
        uniqueDefinedApplicationUnits.size > 1 ||
        (hasAtLeastOneOtherUnit && uniqueDefinedApplicationUnits.size > 0)
      ) {
        hasInconsistentApplicationUnits = true;
      }
      if (uniqueDefinedApplicationUnits.size === 0 && !hasAtLeastOneOtherUnit) {
        hasOnlyOtherUnit = false;
      }
    }

    let primaryUnit = t("units", "units");
    let primaryMixedForSummation = neededMixed || usedMixed;
    let isNeededError = totalNeeded === null;
    let isUsedError = totalUsed === null;
    let calcError =
      (isNeededError || isUsedError) &&
      !hasOnlyOtherUnit &&
      !(hasInconsistentApplicationUnits && hasAtLeastOneOtherUnit);

    if (
      !isNeededError &&
      neededUnit !== t("units", "units") &&
      !neededUnit.includes("Error") &&
      !neededUnit.includes(t("inventoryMixedUnitsWarning", "(mixed units)"))
    ) {
      primaryUnit = neededUnit;
    } else if (
      !isUsedError &&
      usedUnit !== t("units", "units") &&
      !usedUnit.includes("Error") &&
      !usedUnit.includes(t("inventoryMixedUnitsWarning", "(mixed units)"))
    ) {
      primaryUnit = usedUnit;
    } else if (productDetails?.rate) {
      const rateUnit = getBaseUnit(
        productDetails.rate.split("/")[0] || "units"
      );
      if (rateUnit !== t("units", "units")) primaryUnit = rateUnit;
    }
    if (primaryUnit.includes(t("na", "N/A"))) primaryUnit = t("units", "units");

    const safeName = escapeHtml(name);
    const formatQtyDisplay = (num, isErr, isOtherInvolvedInUnsummable) => {
      if (isOtherInvolvedInUnsummable) return t("na", "N/A");
      return isErr ? t("na", "N/A") : formatNumberLocale(num);
    };

    const unitWarningClassForSummation = primaryMixedForSummation
      ? "unit-mixed-warning"
      : "";
    let unitHtml = t("units", "units");

    const shouldDisplayQtyAsNA =
      hasOnlyOtherUnit ||
      (hasInconsistentApplicationUnits && hasAtLeastOneOtherUnit);

    if (shouldDisplayQtyAsNA) {
      unitHtml = t("na", "N/A");
      if (hasOnlyOtherUnit) unitHtml = t("otherUnit", "other");
    } else if (!calcError) {
      unitHtml = `<span class="${unitWarningClassForSummation}">${escapeHtml(
        primaryUnit
      )}</span>`;
    } else {
      unitHtml = `<span style="color: #dc3545;">${t("na", "N/A")}</span>`;
    }

    const neededDisplay = formatQtyDisplay(
      totalNeeded,
      isNeededError,
      shouldDisplayQtyAsNA
    );
    const usedDisplay = formatQtyDisplay(
      totalUsed,
      isUsedError,
      shouldDisplayQtyAsNA
    );

    let currentStock = null;
    if (shouldDisplayQtyAsNA) {
      currentStock = totalStock;
    } else if (!isUsedError) {
      currentStock = totalStock - totalUsed;
    }
    const currentStockDisplay = formatQtyDisplay(
      currentStock,
      isUsedError || (shouldDisplayQtyAsNA && isUsedError),
      shouldDisplayQtyAsNA
    );

    let stockBalance = null;
    if (shouldDisplayQtyAsNA) {
      stockBalance = totalStock;
    } else if (!isUsedError && !isNeededError) {
      if (currentStock !== null && totalNeeded !== null) {
        stockBalance = currentStock - totalNeeded;
      }
    }
    const stockBalanceDisplay = formatQtyDisplay(
      stockBalance,
      isNeededError ||
        isUsedError ||
        (shouldDisplayQtyAsNA && (isNeededError || isUsedError)),
      shouldDisplayQtyAsNA
    );

    const calcErrorWarningHtml = calcError
      ? `<div class="inventory-calc-error-warning"><i class="fas fa-exclamation-triangle"></i> ${t(
          "inventoryCalcErrorWarning",
          "Calculation error..."
        )}</div>`
      : "";
    const inconsistentUnitsWarningHtml =
      hasInconsistentApplicationUnits && !hasOnlyOtherUnit
        ? `<div class="inventory-unit-base-warning" style="display: block;"><i class="fas fa-exclamation-triangle"></i> ${t(
            "inventoryInconsistentBaseWarning",
            "Warning: Inconsistent dose units used..."
          )}</div>`
        : "";
    const otherUnitMessageHtml = hasOnlyOtherUnit
      ? `<div class="validation-info" style="font-size:0.85em; margin-top: 4px;"><i class="fas fa-info-circle"></i> ${t(
          "inventoryOtherUnitWarning",
          "Quantity cannot be calculated for 'other' unit..."
        )}</div>`
      : "";

    const actionsHTML = `
            <button class="toggle-uses-btn" data-translate-title="inventoryShowDetailsBtnTitle" title="${t(
              "inventoryShowDetailsBtnTitle",
              "Show/Hide Treatment Details"
            )}"><i class="fas fa-chevron-down"></i></button>
            <button class="edit-btn" data-translate-title="inventoryEditStockBtnTitle" title="${t(
              "inventoryEditStockBtnTitle",
              "View Details / Edit Stock"
            )}"><i class="fas fa-warehouse"></i></button>
        `;

    productDiv.innerHTML = `
            <div class="supply-item-header">
                <div class="list-item-info">
                    <strong>${safeName} (${usageCount} ${t(
      "inventoryTreatmentsSuffix",
      "Treatments"
    )})</strong>
                    <div class="inventory-summary">
                        <p>${t(
                          "inventoryNeededLabel",
                          "Quantity Needed:"
                        )} ${neededDisplay} ${unitHtml} | ${t(
      "inventoryCurrentStockLabel",
      "Current Stock:"
    )} <span class="${
      currentStock !== null && currentStock < 0 ? "negative-balance" : ""
    }">${currentStockDisplay}</span> ${unitHtml} | ${t(
      "inventoryStockBalanceLabel",
      "Stock Balance:"
    )} <span class="${
      stockBalance !== null && stockBalance < 0 ? "negative-balance" : ""
    }">${stockBalanceDisplay}</span> ${unitHtml}</p>
                        ${otherUnitMessageHtml}
                        ${inconsistentUnitsWarningHtml}
                        ${calcErrorWarningHtml}
                    </div>
                </div>
                <div class="list-item-actions">${actionsHTML}</div>
            </div>
            <div class="product-uses-details" style="display: none;"><div class="product-upcoming-uses-list"></div></div>`;

    const detailsContainer = productDiv.querySelector(".product-uses-details");
    const upcomingListContainer = detailsContainer?.querySelector(
      ".product-upcoming-uses-list"
    );

    if (detailsContainer && upcomingListContainer) {
      upcomingListContainer.innerHTML = `<h4 class="details-section-title">${t(
        "inventoryDetailsUpcomingTitle",
        "Upcoming/Unscheduled Uses"
      )} (${neededTreatments.length})</h4>`;
      const ulNeeded = document.createElement("ul");
      if (neededTreatments.length > 0) {
        neededTreatments.sort((a, b) => {
          const isSchedLaterA = a.scheduleLater || !a.date;
          const isSchedLaterB = b.scheduleLater || !b.date;
          if (isSchedLaterA && !isSchedLaterB) return -1;
          if (!isSchedLaterA && isSchedLaterB) return 1;
          if (isSchedLaterA && isSchedLaterB) return (a.id || 0) - (b.id || 0);
          try {
            return (
              new Date(`${a.date}T${a.time || "00:00"}`) -
              new Date(`${b.date}T${b.time || "00:00"}`)
            );
          } catch {
            return 0;
          }
        });
        neededTreatments.forEach((treat) =>
          addTreatmentItemToInventoryList(treat, ulNeeded, farms, pestsDiseases)
        );
      } else {
        ulNeeded.innerHTML = `<li><p>${t(
          "inventoryDetailsNoUpcoming",
          "No upcoming, unscheduled, or missed uses found."
        )}</p></li>`;
      }
      upcomingListContainer.appendChild(ulNeeded);

      if (pastTreatments.length > 0) {
        const pastButton = document.createElement("button");
        pastButton.className = "view-product-past-uses-btn";
        pastButton.textContent = `${t(
          "inventoryViewPastUsesBtn",
          "View Past Uses"
        )} (${pastTreatments.length})`;
        pastButton.title = t(
          "inventoryShowDetailsBtnTitle",
          "Show/Hide Treatment Details"
        );
        pastButton.addEventListener("click", () =>
          toggleInventoryPastUsesView(pastButton)
        );
        detailsContainer.appendChild(pastButton);

        const pastListContainer = document.createElement("div");
        pastListContainer.className = "product-past-uses-list";
        pastListContainer.style.display = "none";
        detailsContainer.appendChild(pastListContainer);
        pastListContainer.innerHTML = `<h4 class="details-section-title">${t(
          "inventoryDetailsPastTitle",
          "Completed Treatments"
        )} (${pastTreatments.length})</h4>`;
        const ulPast = document.createElement("ul");
        pastTreatments.sort((a, b) => {
          try {
            return (
              new Date(`${b.date}T${b.time || "00:00"}`) -
              new Date(`${a.date}T${a.time || "00:00"}`)
            );
          } catch {
            return 0;
          }
        });
        pastTreatments.forEach((treat) =>
          addTreatmentItemToInventoryList(treat, ulPast, farms, pestsDiseases)
        );
        pastListContainer.appendChild(ulPast);
      }
    }
    supplyListContainer.appendChild(productDiv);
  });
}
function addTreatmentItemToInventoryList(t, ulElement, farms, pestsDiseases) {
  if (!t || !t.id) {
    console.warn(
      "Invalid treatment passed to addTreatmentItemToInventoryList:",
      t
    );
    return;
  }
  const translate = (key, fallback) =>
    translations[currentLang]?.[key] || fallback;
  const li = document.createElement("li");
  li.dataset.treatmentId = t.id;

  const farm = farms.find((f) => f && f.id === t.farmId);
  const pest = t.pestDiseaseId
    ? pestsDiseases.find((p) => p && p.id === t.pestDiseaseId)
    : null;
  const datePart =
    t.scheduleLater || !t.date
      ? translate("treatmentDetailsDateTimeUnscheduled", "To be scheduled")
      : formatDateLocale(t.date);
  const farmPart = farm
    ? escapeHtml(farm.name)
    : translate("farmDetailsTitle", "Unknown Farm");
  const pestPart = pest
    ? escapeHtml(pest.name)
    : translate("treatmentModalTitleGeneral", "General");

  const { totalQty, unitLabel } = calculateQuantitiesFromTreatmentData(t);
  const qtyPart =
    totalQty !== null
      ? `${formatNumberLocale(totalQty)} ${escapeHtml(
          unitLabel || translate("units", "units")
        )}`
      : translate("na", "N/A (Check Entry)");

  const isMissed = isPast(t) && t.status !== "completed";
  const missedText = isMissed
    ? ` <span class="inventory-missed-warning">${translate(
        "inventoryMissedIndicator",
        "(Missed)"
      )}</span>`
    : "";

  const overviewString = `${datePart} - ${farmPart} (${pestPart}) - ${translate(
    "treatmentDetailsTotalQtyLabel",
    "Calculated Total Quantity:"
  )} ${qtyPart}${missedText}`;

  const statusClass = getTreatmentStatusClass(t);
  const statusIcon = getStatusIcon(t, true);
  if (statusClass) li.className = statusClass;

  let completionButtonHTML = "";
  const showCompletionButtons = !t.scheduleLater && t.date;
  if (showCompletionButtons) {
    const completeTitle = translate(
      "markCompleteBtnTitle",
      "Mark as Completed"
    );
    const unmarkTitle = translate("unmarkCompleteBtnTitle", "Unmark Completed");
    completionButtonHTML =
      t.status === "completed"
        ? `<button class="unmark-btn" data-translate-title="unmarkCompleteBtnTitle" title="${unmarkTitle}"><i class="fas fa-undo"></i></button>`
        : `<button class="complete-btn" data-translate-title="markCompleteBtnTitle" title="${completeTitle}"><i class="fas fa-check"></i></button>`;
  }

  const detailsTitle = translate("detailsBtnTitle", "Details");
  const editTitle = translate("editBtnTitle", "Edit");
  const deleteTitle = translate("deleteBtnTitle", "Delete");
  const actionsHTML = `
        <div class="treatment-actions">
            ${completionButtonHTML}
            <button class="details-btn" data-translate-title="detailsBtnTitle" title="${detailsTitle}"><i class="fas fa-info-circle"></i></button>
            <button class="edit-btn" data-translate-title="editBtnTitle" title="${editTitle}"><i class="fas fa-edit"></i></button>
            <button class="delete-btn" data-translate-title="deleteBtnTitle" title="${deleteTitle}"><i class="fas fa-trash-alt"></i></button>
        </div>`;

  li.innerHTML = `<span>${statusIcon} ${overviewString}</span> ${actionsHTML}`;
  ulElement.appendChild(li);
}

function handleStockAdjustment(productName, isAdding) {
  const modal = document.getElementById("productStockModal");
  if (!modal || !productName) return;
  const adjInput = modal.querySelector("#stockModalAdjustmentInput");
  const totalStockDisplay = modal.querySelector("#stockModalStockInput");
  if (!adjInput || !totalStockDisplay) {
    console.error("Adjustment or total stock elements missing.");
    return;
  }
  const adjustmentAmount = parseFloat(adjInput.value);
  if (isNaN(adjustmentAmount) || adjustmentAmount <= 0) {
    alert(
      translations[currentLang]?.stockAdjustError ||
        "Please enter a valid positive amount for the adjustment."
    );
    adjInput.value = "";
    adjInput.focus();
    return;
  }
  let products = getProducts();
  let productUpdated = false;
  let finalTotalStockValue = 0;
  products = products.map((p) => {
    if (p.name === productName) {
      const currentTotalStock = p.stock ?? 0;
      let newTotalStock = isAdding
        ? currentTotalStock + adjustmentAmount
        : currentTotalStock - adjustmentAmount;
      finalTotalStockValue = newTotalStock;
      if (p.stock !== newTotalStock) {
        productUpdated = true;
        return { ...p, stock: newTotalStock };
      }
    }
    return p;
  });
  if (productUpdated) {
    setProducts(products);
    renderSupplyList();
    console.log(
      `Updated total stock for "${productName}" to ${finalTotalStockValue}`
    );
    totalStockDisplay.value = formatNumberLocale(finalTotalStockValue);
    updateStockModalDisplay(productName);
  } else {
    console.log(`Stock for "${productName}" not changed, no update saved.`);
  }
  adjInput.value = "";
}
function updateStockModalDisplay(productName) {
  const modal = document.getElementById("productStockModal");
  if (!modal || !productName) return;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  const neededSpan = modal.querySelector("#stockModalNeeded");
  const usedSpan = modal.querySelector("#stockModalUsed");
  const totalStockInput = modal.querySelector("#stockModalStockInput");
  const totalStockUnitLabel = modal.querySelector("#stockModalUnitLabel");
  const currentStockInput = modal.querySelector("#stockModalCurrentStockInput");
  const currentStockUnitLabel = modal.querySelector(
    "#stockModalCurrentUnitLabel"
  );
  const balanceInput = modal.querySelector("#stockModalBalanceInput");
  const balanceUnitLabel = modal.querySelector("#stockModalBalanceUnitLabel");
  const balanceWarningContainer = modal.querySelector("#stockBalanceWarnings");
  const currentStockWarningContainer = modal.querySelector(
    "#stockCurrentWarnings"
  );
  const totalStockWarningContainer = modal.querySelector("#stockTotalWarnings");
  const neededWarningContainer = modal.querySelector("#stockNeededWarnings");
  const usedWarningContainer = modal.querySelector("#stockUsedWarnings");

  if (
    !neededSpan ||
    !usedSpan ||
    !totalStockInput ||
    !totalStockUnitLabel ||
    !currentStockInput ||
    !currentStockUnitLabel ||
    !balanceInput ||
    !balanceUnitLabel ||
    !balanceWarningContainer ||
    !currentStockWarningContainer ||
    !totalStockWarningContainer ||
    !neededWarningContainer ||
    !usedWarningContainer
  ) {
    console.error(
      "Required elements missing in stock modal for dynamic update."
    );
    return;
  }

  const product = getProducts().find((p) => p.name === productName);
  const totalStock = product?.stock ?? 0;
  const {
    totalNeeded,
    unit: neededUnit,
    isMixed: neededMixed
  } = calculateTotalQuantityNeededForProduct(productName);
  const {
    totalUsed,
    unit: usedUnit,
    isMixed: usedMixed
  } = calculateTotalQuantityUsedForProduct(productName);

  let primaryUnit = t("units", "units");
  let primaryMixed = false;
  let isNeededError = totalNeeded === null;
  let isUsedError = totalUsed === null;

  if (
    !isNeededError &&
    neededUnit !== t("units", "units") &&
    !neededUnit.includes("Error") &&
    !neededUnit.includes(t("inventoryMixedUnitsWarning", "(mixed units)"))
  ) {
    primaryUnit = neededUnit;
    primaryMixed = neededMixed;
  } else if (
    !isUsedError &&
    usedUnit !== t("units", "units") &&
    !usedUnit.includes("Error") &&
    !usedUnit.includes(t("inventoryMixedUnitsWarning", "(mixed units)"))
  ) {
    primaryUnit = usedUnit;
    primaryMixed = usedMixed;
  } else if (product?.rate) {
    const rateUnit = getBaseUnit(product.rate.split("/")[0] || "units");
    if (rateUnit !== t("units", "units")) primaryUnit = rateUnit;
  }
  if (primaryUnit.includes(t("na", "N/A"))) primaryUnit = t("units", "units");

  const formatQtyDisplay = (num, isError) =>
    isError ? t("na", "N/A") : formatNumberLocale(num);
  const currentStock = !isUsedError ? totalStock - totalUsed : null;
  const stockBalance =
    !isUsedError && !isNeededError ? currentStock - totalNeeded : null;
  const unitHtml = `<span class="${
    primaryMixed ? "unit-mixed-warning" : ""
  }">${escapeHtml(primaryUnit)}</span>`;

  neededSpan.innerHTML = `${formatQtyDisplay(
    totalNeeded,
    isNeededError
  )} ${unitHtml}`;
  usedSpan.innerHTML = `${formatQtyDisplay(
    totalUsed,
    isUsedError
  )} ${unitHtml}`;
  totalStockInput.value = formatNumberLocale(totalStock);
  totalStockUnitLabel.innerHTML = unitHtml;
  currentStockInput.value = formatQtyDisplay(currentStock, isUsedError);
  currentStockUnitLabel.innerHTML = unitHtml;
  currentStockInput.classList.toggle(
    "negative-balance",
    currentStock !== null && currentStock < 0
  );
  balanceInput.value = formatQtyDisplay(
    stockBalance,
    isUsedError || isNeededError
  );
  balanceUnitLabel.innerHTML = unitHtml;
  balanceInput.classList.toggle(
    "negative-balance",
    stockBalance !== null && stockBalance < 0
  );

  neededWarningContainer.innerHTML = "";
  usedWarningContainer.innerHTML = "";
  currentStockWarningContainer.innerHTML = "";
  balanceWarningContainer.innerHTML = "";
  totalStockWarningContainer.innerHTML = "";

  const errorIcon = '<i class="fas fa-exclamation-triangle"></i>';
  if (isNeededError)
    neededWarningContainer.innerHTML = `<p class="stock-warning-message">${errorIcon} ${t(
      "stockCalcErrorMsg",
      "Calculation Error: Check treatment entries."
    )}</p>`;
  if (isUsedError)
    usedWarningContainer.innerHTML = `<p class="stock-warning-message">${errorIcon} ${t(
      "stockCalcErrorMsg",
      "Calculation Error: Check treatment entries."
    )}</p>`;
  if (isUsedError)
    currentStockWarningContainer.innerHTML = `<p class="stock-warning-message">${errorIcon} ${t(
      "stockCalcErrorMsg",
      "Calculation Error: Check treatment entries."
    )}</p>`;
  if (isNeededError || isUsedError)
    balanceWarningContainer.innerHTML = `<p class="stock-warning-message">${errorIcon} ${t(
      "stockCalcErrorMsg",
      "Calculation Error: Check treatment entries."
    )}</p>`;
  if (totalStock < 0) {
    totalStockWarningContainer.innerHTML += `<p class="stock-warning-message">${t(
      "stockTotalNegativeMsg",
      "Total Stock is negative. Check adjustments."
    )}</p>`;
  }
  if (!isUsedError && totalStock < totalUsed) {
    totalStockWarningContainer.innerHTML += `<p class="stock-warning-message">${t(
      "stockTotalLowMsg",
      "Total Stock < Quantity Used. Check stock entries or completed treatments."
    )}</p>`;
  }
  if (primaryMixed) {
    const mixedMsgHtml = `<p class="stock-warning-message unit-mixed-warning">${t(
      "stockMixedUnitsMsg",
      "Units are mixed! Calculations may be inaccurate."
    )}</p>`;
    if (!isNeededError && neededWarningContainer.innerHTML === "")
      neededWarningContainer.innerHTML = mixedMsgHtml;
    if (!isUsedError && usedWarningContainer.innerHTML === "")
      usedWarningContainer.innerHTML = mixedMsgHtml;
    if (!isUsedError && currentStockWarningContainer.innerHTML === "")
      currentStockWarningContainer.innerHTML = mixedMsgHtml;
    if (
      !isNeededError &&
      !isUsedError &&
      balanceWarningContainer.innerHTML === ""
    )
      balanceWarningContainer.innerHTML = mixedMsgHtml;
    totalStockWarningContainer.innerHTML += mixedMsgHtml;
  }

  if (!isUsedError && !isNeededError) {
    if (stockBalance < 0) {
      if (balanceWarningContainer.innerHTML === "") {
        const shortMsg = t(
          "stockBalanceInsufficientMsg",
          "Insufficient stock for planned treatments! ({shortfall} {unit} short)"
        )
          .replace("{shortfall}", formatNumberLocale(Math.abs(stockBalance)))
          .replace("{unit}", escapeHtml(primaryUnit));
        balanceWarningContainer.innerHTML = `<p class="stock-warning-message">${shortMsg}</p>`;
      }
      if (currentStockWarningContainer.innerHTML === "") {
        currentStockWarningContainer.innerHTML = `<p class="stock-warning-message">${t(
          "stockCurrentNeedMoreMsg",
          "You may need more products! Use our search engine to find shops near you."
        )}</p>`;
      }
    } else if (!primaryMixed && stockBalance >= 0) {
      if (balanceWarningContainer.innerHTML === "") {
        balanceWarningContainer.innerHTML = `<p class="stock-info-message">${t(
          "stockBalanceSufficientMsg",
          "Sufficient stock for all planned treatments."
        )}</p>`;
      }
    }
  }
}
function openProductStockModal(encodedProductName) {
  let productName = "";
  try {
    productName = decodeURIComponent(encodedProductName);
  } catch (e) {
    console.error("Error decoding product name for stock modal:", e);
    alert("Invalid product name.");
    return;
  }

  const modal = document.getElementById("productStockModal");
  if (!modal) {
    console.error("Product stock modal not found.");
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  const adjInput = modal.querySelector("#stockModalAdjustmentInput");
  const addBtn = modal.querySelector("#addStockBtn");
  const removeBtn = modal.querySelector("#removeStockBtn");
  const productNameSpan = modal.querySelector("#stockModalProductName");
  const usesSpan = modal.querySelector("#stockModalUses");
  const totalStockInput = modal.querySelector("#stockModalStockInput");
  const currentStockInput = modal.querySelector("#stockModalCurrentStockInput");
  const balanceInput = modal.querySelector("#stockModalBalanceInput");

  if (
    !adjInput ||
    !addBtn ||
    !removeBtn ||
    !productNameSpan ||
    !usesSpan ||
    !totalStockInput ||
    !currentStockInput ||
    !balanceInput
  ) {
    console.error(
      "One or more required elements missing in product stock modal."
    );
    return;
  }

  const product = getProducts().find((p) => p.name === productName);
  if (!product) {
    alert(
      t(
        "stockProductNotFound",
        'Product details not found for "{productName}".'
      ).replace("{productName}", escapeHtml(productName))
    );
    return;
  }

  const treatments = getLocalStorage("treatments");
  const usageCount = treatments.filter((t) => t?.productName === productName)
    .length;
  const usageText = `${usageCount} ${t(
    "inventoryTreatmentsSuffix",
    usageCount === 1 ? "Treatment" : "Treatments"
  )}`;

  productNameSpan.textContent = escapeHtml(productName);
  usesSpan.textContent = usageText;
  totalStockInput.readOnly = true;
  currentStockInput.readOnly = true;
  balanceInput.readOnly = true;
  adjInput.value = "";

  updateStockModalDisplay(productName);
  modal.dataset.productName = productName;

  if (addBtn._stockAdjListener) {
    addBtn.removeEventListener("click", addBtn._stockAdjListener);
    delete addBtn._stockAdjListener;
  }
  if (removeBtn._stockAdjListener) {
    removeBtn.removeEventListener("click", removeBtn._stockAdjListener);
    delete removeBtn._stockAdjListener;
  }

  addBtn._stockAdjListener = () => handleStockAdjustment(productName, true);
  addBtn.addEventListener("click", addBtn._stockAdjListener);
  removeBtn._stockAdjListener = () => handleStockAdjustment(productName, false);
  removeBtn.addEventListener("click", removeBtn._stockAdjListener);

  modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
  modal.style.display = "block";
  adjInput.focus();
}

// --- Calculation Modal Functions ---
function openTreatmentSupplyCalculator(treatmentId) {
  const treatment = getLocalStorage("treatments").find(
    (t) => t && t.id === treatmentId
  );
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  if (!treatment) {
    alert(t("treatmentNotFound", "Could not find treatment details."));
    console.error(`Treatment not found for ID: ${treatmentId}`);
    return;
  }
  const farm = getLocalStorage("farms").find(
    (f) => f && f.id === treatment.farmId
  );
  if (!farm) {
    alert(
      t(
        "treatmentContextFarmNotFoundError",
        "Could not find associated farm details for this treatment."
      )
    );
    console.error(
      `Farm not found for treatment ID: ${treatmentId}, Farm ID: ${treatment.farmId}`
    );
    return;
  }

  const modal = document.getElementById("supplyCalculatorModal");
  const form = document.getElementById("supplyCalculatorForm");
  const titleEl = document.getElementById("supplyCalculatorTitle");
  const surfaceAreaEl = form.querySelector("#supplyCalcSurfaceArea");
  const infoEl = form.querySelector("#surfaceAreaInfo");
  const errorEl = form.querySelector("#surfaceAreaError");
  const appRateEl = form.querySelector("#supplyCalcAppRate");
  const appRateUnitEl = form.querySelector("#supplyCalcUnit");
  const numApplicatorsEl = form.querySelector("#supplyCalcNumApplicators");

  if (
    !modal ||
    !form ||
    !titleEl ||
    !surfaceAreaEl ||
    !infoEl ||
    !errorEl ||
    !appRateEl ||
    !appRateUnitEl ||
    !numApplicatorsEl
  ) {
    console.error(
      "Supply calculator modal or its core elements (including messages) not found."
    );
    return;
  }

  form.reset();
  infoEl.style.display = "none";
  errorEl.style.display = "none";
  surfaceAreaEl.style.borderColor = "";
  modal.dataset.associatedFarmId = farm.id;
  modal.dataset.associatedFarmSize =
    typeof farm.farmSize === "number" && !isNaN(farm.farmSize)
      ? farm.farmSize
      : "";

  const safeProductName = escapeHtml(
    treatment.productName ||
      t("treatmentDetailsProductUnknown", "Unknown Product")
  );
  const safeFarmName = escapeHtml(
    farm.name || t("farmDetailsTitle", "Unknown Farm")
  );
  const dateDisplay = treatment.date
    ? formatDateLocale(treatment.date)
    : t("treatmentDetailsDateTimeUnscheduled", "Unscheduled");

  titleEl.textContent = `${t("supplyCalcTitle", "Calculator")} ${t(
    "treatmentModalTitlePestPrefix",
    "for"
  )} ${safeProductName} ${t(
    "farmDetailsTitle",
    "on"
  )} ${safeFarmName} (${dateDisplay})`;

  surfaceAreaEl.value =
    treatment.totalSurface !== null &&
    typeof treatment.totalSurface === "number" &&
    !isNaN(treatment.totalSurface)
      ? treatment.totalSurface
      : modal.dataset.associatedFarmSize;
  appRateEl.value =
    treatment.applicationDose !== null && !isNaN(treatment.applicationDose)
      ? treatment.applicationDose
      : "";

  if (
    treatment.applicationUnit &&
    appRateUnitEl.querySelector(`option[value="${treatment.applicationUnit}"]`)
  ) {
    appRateUnitEl.value = treatment.applicationUnit;
  } else if (treatment.applicationUnit) {
    console.warn(
      `Treatment rate unit "${treatment.applicationUnit}" not in calculator dropdown. Defaulting.`
    );
    appRateUnitEl.value = "";
  } else {
    appRateUnitEl.value = "";
  }

  if (
    treatment.appContextType === "applicators_ha" &&
    treatment.appContextValue !== null &&
    typeof treatment.appContextValue === "number" &&
    !isNaN(treatment.appContextValue)
  ) {
    numApplicatorsEl.value = treatment.appContextValue;
  } else {
    numApplicatorsEl.value = 1;
  }

  calculateSupplyQuantities();
  validateSurfaceAreaInput();

  const invDropdown = document.getElementById("supplySectionContent");
  let baseZ = BASE_MODAL_ZINDEX;
  if (invDropdown && invDropdown.style.display === "block") {
    baseZ =
      parseInt(
        invDropdown.closest(".dropdown").style.zIndex || BASE_MODAL_ZINDEX
      ) + 5;
  }
  modal.style.zIndex = baseZ + 10;
  modal.style.display = "block";
  surfaceAreaEl.focus();
}
function openSupplyCalculator(encodedProductName) {
  alert(
    "This calculator needs treatment context. Please open via a treatment record."
  );
}
function handleSupplyCalculatorChange(event) {
  if (event.target.closest("#supplyCalculatorForm")) {
    if (event.target.id === "supplyCalcSurfaceArea") {
      validateSurfaceAreaInput();
    }
    calculateSupplyQuantities();
  }
}
function validateSurfaceAreaInput() {
  const modal = document.getElementById("supplyCalculatorModal");
  const surfaceAreaElement = modal?.querySelector("#supplyCalcSurfaceArea");
  const infoEl = modal?.querySelector("#surfaceAreaInfo");
  const errorEl = modal?.querySelector("#surfaceAreaError");
  if (!modal || !surfaceAreaElement || !infoEl || !errorEl) return;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  const farmIdStr = modal.dataset.associatedFarmId;
  const farmSizeStr = modal.dataset.associatedFarmSize;
  infoEl.textContent = "";
  infoEl.style.display = "none";
  errorEl.textContent = "";
  errorEl.style.display = "none";
  surfaceAreaElement.style.borderColor = "";

  if (farmIdStr && farmSizeStr) {
    const farmSize = parseFloat(farmSizeStr);
    const inputValue = parseFloat(surfaceAreaElement.value);

    if (isNaN(farmSize) || farmSize < 0) {
      console.warn(
        `Invalid farm size (${farmSizeStr}) in dataset for validation.`
      );
      return;
    }

    if (!isNaN(inputValue) && inputValue >= 0) {
      if (inputValue > farmSize) {
        const errorMsg = t(
          "supplyCalcSurfaceErrorDefault",
          "Cannot treat more than the farm size ({farmSize} ha)."
        ).replace("{farmSize}", formatNumberLocale(farmSize));
        const suffix = t(
          "supplyCalcErrorSuffix",
          "Edit the Farm record to increase its size if needed."
        );
        errorEl.textContent = `${errorMsg} ${suffix}`;
        errorEl.style.display = "block";
        surfaceAreaElement.value = farmSize;
        surfaceAreaElement.style.borderColor = "#dc3545";
        surfaceAreaElement.dispatchEvent(new Event("input", { bubbles: true }));
      } else if (inputValue < farmSize && inputValue !== farmSize) {
        infoEl.textContent = t(
          "supplyCalcSurfaceInfoDefault",
          "Note: Treating less than the full farm size ({farmSize} ha)."
        ).replace("{farmSize}", formatNumberLocale(farmSize));
        infoEl.style.display = "block";
      }
    }
  }
}
function calculateSupplyQuantities() {
  const form = document.getElementById("supplyCalculatorForm");
  if (!form) return;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;

  const surfaceAreaElement = form.querySelector("#supplyCalcSurfaceArea");
  const appRateElement = form.querySelector("#supplyCalcAppRate");
  const appRateUnitElement = form.querySelector("#supplyCalcUnit");
  const numApplicatorsElement = form.querySelector("#supplyCalcNumApplicators");
  const totalQuantityField = form.querySelector("#supplyCalcTotalQuantity");
  const perApplicatorField = form.querySelector("#supplyCalcPerApplicator");

  if (
    !surfaceAreaElement ||
    !appRateElement ||
    !appRateUnitElement ||
    !numApplicatorsElement ||
    !totalQuantityField ||
    !perApplicatorField
  ) {
    console.error("One or more calculator elements not found.");
    return;
  }

  const surfaceAreaHa = parseFloat(surfaceAreaElement.value);
  const doseValue = parseFloat(appRateElement.value);
  const doseFullUnit = appRateUnitElement.value;
  let numApplicators = parseInt(numApplicatorsElement.value);
  if (isNaN(numApplicators) || numApplicators < 1) {
    numApplicators = 1;
    numApplicatorsElement.value = 1;
  }

  let totalQuantityText = t("na", "N/A"),
    perApplicatorText = t("na", "N/A");
  let displayUnit = getBaseUnit(doseFullUnit);

  if (!doseFullUnit) {
    totalQuantityField.value = t("supplyCalcQtyErrorSelectUnit", "Select Unit");
    perApplicatorField.value = t("supplyCalcQtyErrorSelectUnit", "Select Unit");
    return;
  }
  if (isNaN(doseValue)) {
    totalQuantityField.value = t("supplyCalcQtyErrorEnterDose", "Enter Dose");
    perApplicatorField.value = t("supplyCalcQtyErrorEnterDose", "Enter Dose");
    return;
  }

  let calculatedRatePerHa = null;
  try {
    if (doseFullUnit.endsWith("/ha")) {
      calculatedRatePerHa = doseValue;
    } else if (
      doseFullUnit.endsWith("/applicator") &&
      !isNaN(numApplicators) &&
      numApplicators > 0
    ) {
      calculatedRatePerHa = doseValue * numApplicators;
    } else {
      calculatedRatePerHa = null;
      totalQuantityField.value = t(
        "supplyCalcRateError",
        "N/A (Check Unit/Context)"
      );
      perApplicatorField.value = t("na", "N/A");

      if (
        doseFullUnit.endsWith("/plant") ||
        doseFullUnit.endsWith("/kg") ||
        doseFullUnit.endsWith("/L") ||
        doseFullUnit === "other" ||
        doseFullUnit === "units"
      ) {
        const quantityPerHaOutput = form.querySelector(
          "#treatmentQuantityPerHa"
        ); // Assuming this exists for error display
        if (quantityPerHaOutput)
          quantityPerHaOutput.value = t(
            "supplyCalcRateError",
            "N/A (Context Needed)"
          );

        if (!isNaN(surfaceAreaHa) && surfaceAreaHa >= 0) {
          if (
            doseFullUnit !== "other" &&
            doseFullUnit !== "units" &&
            (doseFullUnit.endsWith("/plant") ||
              doseFullUnit.endsWith("/kg") ||
              doseFullUnit.endsWith("/L"))
          ) {
            totalQuantityField.value = t(
              "supplyCalcRateError",
              "N/A (Context Needed)"
            );
          } else if (doseFullUnit === "other" || doseFullUnit === "units") {
            totalQuantityField.value = t(
              "supplyCalcRateError",
              "N/A (Check Unit)"
            );
          } else {
            totalQuantityField.value = t(
              "supplyCalcQtyErrorEnterSurface",
              "Enter Surface Area"
            );
          }
        } else {
          totalQuantityField.value = t(
            "supplyCalcQtyErrorEnterSurface",
            "Enter Surface Area"
          );
        }
        perApplicatorField.value = t("na", "N/A");
        return;
      }
    }
  } catch (e) {
    console.error("Error calculating rate per ha:", e);
    totalQuantityField.value = t("na", "N/A (Error)");
    perApplicatorField.value = t("na", "N/A (Error)");
    return;
  }

  if (
    calculatedRatePerHa !== null &&
    !isNaN(calculatedRatePerHa) &&
    calculatedRatePerHa >= 0
  ) {
    if (!isNaN(surfaceAreaHa) && surfaceAreaHa >= 0) {
      const totalQuantity = surfaceAreaHa * calculatedRatePerHa;
      totalQuantityText = `${formatNumberLocale(totalQuantity)} ${displayUnit}`;
    } else {
      totalQuantityText = t(
        "supplyCalcQtyErrorEnterSurface",
        "Enter Surface Area"
      );
    }
  } else if (calculatedRatePerHa === null && !isNaN(doseValue)) {
    totalQuantityText = t("supplyCalcRateError", "N/A (Context Needed)");
  } else {
    totalQuantityText = t("na", "N/A");
  }

  if (
    doseFullUnit.endsWith("/applicator") &&
    !isNaN(doseValue) &&
    doseValue >= 0
  ) {
    perApplicatorText = `${formatNumberLocale(doseValue)} ${displayUnit}`;
  } else if (
    calculatedRatePerHa !== null &&
    !isNaN(calculatedRatePerHa) &&
    calculatedRatePerHa >= 0 &&
    !isNaN(numApplicators) &&
    numApplicators > 0
  ) {
    const qtyPerApp = calculatedRatePerHa / numApplicators;
    perApplicatorText = `${formatNumberLocale(qtyPerApp)} ${displayUnit}`;
  } else {
    perApplicatorText = t("na", "N/A");
  }

  totalQuantityField.value = totalQuantityText;
  perApplicatorField.value = perApplicatorText;
}

// --- Product Rename/Delete Treatments Modal Logic ---
function editProductPrompt(encodedProductName, event) {
  if (event) event.stopPropagation();
  let productName = "";
  try {
    productName = decodeURIComponent(encodedProductName);
  } catch (e) {
    console.error("Error decoding product name for rename prompt:", e);
    alert("Invalid product name encoding.");
    return;
  }
  const modal = document.getElementById("renameProductModal");
  const form = document.getElementById("renameProductForm");
  const oldNameSpan = document.getElementById("renameProductOldName");
  const newNameInput = document.getElementById("renameProductNewName");
  if (!modal || !form || !oldNameSpan || !newNameInput) {
    console.error("Rename product modal elements not found.");
    return;
  }
  currentProductToRename = productName;
  const safeProductName = escapeHtml(productName);
  oldNameSpan.textContent = safeProductName;
  form.reset();
  newNameInput.value = productName;
  modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
  modal.style.display = "block";
  newNameInput.focus();
  newNameInput.select();
}
function handleRenameProductSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const newNameInput = form.querySelector("#renameProductNewName");
  const newProductName = newNameInput.value.trim();
  const oldProductName = currentProductToRename;
  const modal = document.getElementById("renameProductModal");
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!newProductName) {
    alert(t("renameProductEmptyError", "New product name cannot be empty."));
    newNameInput.focus();
    return;
  }
  if (!oldProductName) {
    console.error("Original product name context lost during rename.");
    alert(
      t(
        "renameProductContextError",
        "An error occurred. Cannot rename product."
      )
    );
    closeModal(modal);
    currentProductToRename = null;
    return;
  }
  if (newProductName === oldProductName) {
    console.log("Product name not changed.");
    closeModal(modal);
    currentProductToRename = null;
    return;
  }
  const products = getProducts();
  if (
    products.some(
      (p) =>
        p.name.toLowerCase() === newProductName.toLowerCase() &&
        p.name.toLowerCase() !== oldProductName.toLowerCase()
    )
  ) {
    alert(
      t(
        "renameProductExistsError",
        'Another product named "{newName}" is already defined or in use. Please choose a different name.'
      ).replace("{newName}", escapeHtml(newProductName))
    );
    newNameInput.focus();
    return;
  }
  let definedProducts = getProducts();
  let productDefinitionUpdated = false;
  definedProducts = definedProducts.map((p) => {
    if (p.name === oldProductName) {
      productDefinitionUpdated = true;
      return { ...p, name: newProductName };
    }
    return p;
  });
  if (productDefinitionUpdated) {
    setProducts(definedProducts);
    console.log(
      `Updated product definition from "${oldProductName}" to "${newProductName}".`
    );
  } else {
    console.warn(
      `Product definition for "${oldProductName}" not found during rename.`
    );
  }
  renameProductInTreatments(oldProductName, newProductName);
  closeModal(modal);
  currentProductToRename = null;
  populateProductNameDropdown();
  renderSupplyList();
  generateReport();
}
function renameProductInTreatments(oldName, newName) {
  let treatments = getLocalStorage("treatments");
  let updateCount = 0;
  treatments = treatments.map((t) => {
    if (t?.productName?.trim() === oldName) {
      updateCount++;
      return { ...t, productName: newName };
    }
    return t;
  });
  if (updateCount > 0) {
    setLocalStorage("treatments", treatments);
    console.log(
      `Renamed product in ${updateCount} treatments from "${oldName}" to "${newName}".`
    );
    renderFarmList();
    renderSupplyList();
  } else {
    console.log(
      `No treatments found with product name "${oldName}" to rename.`
    );
  }
}
function confirmDeleteProductTreatments(encodedProductName, event) {
  if (event) event.stopPropagation();
  let productName = "";
  try {
    productName = decodeURIComponent(encodedProductName);
  } catch (e) {
    console.error("Error decoding product name for delete confirmation:", e);
    alert("Invalid product name encoding.");
    return;
  }
  const modal = document.getElementById("deleteProductConfirmModal");
  const nameSpan = document.getElementById("deleteProductName");
  if (!modal || !nameSpan) {
    console.error(
      "Delete product treatments confirmation modal elements not found."
    );
    return;
  }
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  modal.dataset.productName = productName;
  const safeProductName = escapeHtml(productName);
  nameSpan.textContent = safeProductName;
  const treatments = getLocalStorage("treatments");
  const count = treatments.filter((t) => t?.productName?.trim() === productName)
    .length;
  const messagePara = modal.querySelector("p:first-of-type");
  if (messagePara) {
    const part1 = t(
      "deleteProductConfirmPrompt1",
      "Are you sure you want to delete "
    );
    const part2 = t("deleteProductConfirmPrompt2", "ALL {count}").replace(
      "{count}",
      `<strong>${count}</strong>`
    );
    const part3 = t(
      "deleteProductConfirmPrompt3",
      ' treatments associated with the product "'
    );
    const part4 = t("deleteProductConfirmPrompt4", '"?');
    messagePara.innerHTML = `${part1}${part2}${part3}<strong id="deleteProductName">${safeProductName}</strong>${part4}`;
  }
  modal.style.zIndex = BASE_MODAL_ZINDEX + 10;
  modal.style.display = "block";
}
function handleDeleteProductTreatments() {
  const modal = document.getElementById("deleteProductConfirmModal");
  const productName = modal?.dataset?.productName;
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (!productName) {
    console.error("Product name context lost during delete treatments action.");
    alert(
      t(
        "deleteProductContextError",
        "An error occurred. Cannot delete treatments."
      )
    );
    if (modal) closeModal(modal);
    return;
  }
  let treatments = getLocalStorage("treatments");
  const treatmentsToDelete = [];
  treatments = treatments.filter((t) => {
    if (t?.productName?.trim() === productName) {
      treatmentsToDelete.push(t);
      return false;
    }
    return true;
  });
  const deleteCount = treatmentsToDelete.length;
  if (deleteCount > 0) {
    treatmentsToDelete.forEach((t) => {
      if (activeTimeouts[t.id]) clearTimeout(activeTimeouts[t.id]);
      delete activeTimeouts[t.id];
    });
    setLocalStorage("treatments", treatments);
    console.log(
      `Deleted ${deleteCount} treatments associated with product "${productName}".`
    );
    populateProductNameDropdown();
    renderSupplyList();
    renderFarmList();
    generateReport();
    renderCalendar();
    scheduleNotifications();
    const calendarModal = document.getElementById("calendarDayModal");
    if (calendarModal && calendarModal.style.display === "block") {
      const displayedDate = calendarModal.dataset.displayedDate;
      const deletedOnDisplayedDate = treatmentsToDelete.some(
        (t) => t.date === displayedDate
      );
      if (deletedOnDisplayedDate) {
        showCalendarDayDetails(displayedDate);
      }
    }
  } else {
    console.log(
      `No treatments found associated with product "${productName}" to delete.`
    );
    alert(
      t(
        "deleteProductNoneFoundError",
        'No treatments were found using the product name "{productName}".'
      ).replace("{productName}", escapeHtml(productName))
    );
  }
  closeModal(modal);
}

// --- Notifications ---
function scheduleNotifications() {
  let treatments = getLocalStorage("treatments");
  const now = new Date().getTime();
  Object.values(activeTimeouts).forEach((timeoutId) => clearTimeout(timeoutId));
  for (const id in activeTimeouts) {
    delete activeTimeouts[id];
  }
  treatments.forEach((item) => {
    if (
      !item ||
      !item.id ||
      item.scheduleLater ||
      !item.date ||
      !item.time ||
      item.status === "completed"
    ) {
      return;
    }
    try {
      const timeParts = item.time.split(":");
      const formattedTime = `${String(timeParts[0] || "00").padStart(
        2,
        "0"
      )}:${String(timeParts[1] || "00").padStart(2, "0")}:${String(
        timeParts[2] || "00"
      ).padStart(2, "0")}`;
      const treatmentDateTime = new Date(`${item.date}T${formattedTime}`);
      const treatmentTime = treatmentDateTime.getTime();
      if (isNaN(treatmentTime)) {
        console.warn(
          `Invalid date/time for notification: ID ${item.id}, Date: ${item.date}, Time: ${item.time}`
        );
        return;
      }
      const timeUntil = treatmentTime - now;
      if (timeUntil > 500) {
        const productNameDisplay = item.productName
          ? escapeHtml(item.productName)
          : t("treatmentDetailsProductUnknown", "Unknown Product");
        const treatmentId = item.id;
        const timeoutId = setTimeout(() => {
          const currentTreatments = getLocalStorage("treatments");
          const currentTreatment = currentTreatments.find(
            (t) => t && t.id === treatmentId
          );
          if (
            currentTreatment &&
            currentTreatment.status !== "completed" &&
            !currentTreatment.scheduleLater &&
            currentTreatment.date === item.date &&
            currentTreatment.time === item.time
          ) {
            showNotification(productNameDisplay, treatmentId);
          } else {
            console.log(
              `Notification cancelled or treatment status changed for ID: ${treatmentId}.`
            );
          }
          delete activeTimeouts[treatmentId];
        }, timeUntil);
        activeTimeouts[treatmentId] = timeoutId;
      }
    } catch (e) {
      console.error(`Error scheduling notification for ID ${item.id}:`, e);
    }
  });
  console.log(
    "Notifications scheduled. Active timeouts:",
    Object.keys(activeTimeouts).length
  );
}
function showNotification(productNameDisplay, treatmentId) {
  const currentTreatments = getLocalStorage("treatments");
  const treatment = currentTreatments.find((t) => t && t.id === treatmentId);
  const t = (key, fallback) => translations[currentLang]?.[key] || fallback;
  if (
    !treatment ||
    treatment.status === "completed" ||
    treatment.scheduleLater ||
    !treatment.date
  ) {
    console.log(`Notification show skipped for irrelevant ID: ${treatmentId}.`);
    renderFarmList();
    renderCalendar();
    generateReport();
    renderSupplyList();
    return;
  }
  const farms = getLocalStorage("farms");
  const farm = farms.find((f) => f && f.id === treatment.farmId);
  const farmName = farm
    ? escapeHtml(farm.name)
    : t("farmDetailsTitle", "Unknown Farm");
  const modal = document.getElementById("notificationModal");
  const messageElement = document.getElementById("notificationMessage");
  const bodyText = t(
    "notificationBody",
    "It's time for application of {productName} in {farmName}!"
  )
    .replace("{productName}", productNameDisplay)
    .replace("{farmName}", farmName);
  const footerText = t(
    "notificationFooter",
    "Please follow the direction of use!"
  );
  if (modal && messageElement) {
    messageElement.innerHTML = `${bodyText}<br><small style="font-size: 0.9em; color: #555;">${footerText}</small>`;
    modal.style.zIndex = BASE_MODAL_ZINDEX + 20;
    modal.style.display = "block";
  } else {
    console.error("Notification modal elements not found!");
    alert(`${bodyText} ${footerText}`);
  }
  renderFarmList();
  renderCalendar();
  generateReport();
  renderSupplyList();
}

// --- End of script.js ---
