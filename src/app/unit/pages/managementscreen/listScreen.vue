<template>
    <div class="main-controller">
        <h5 class="header-text">لیست گواهینامه های ارسالی توسط مدرسان</h5>
        <Accordion :multiple="true" >
            <AccordionTab header="گواهینامه محمد محمدی">
                <div class="d-flex">
                    <div class="w-50 first-button">
                        <Button :label="'پرینت گواهینامه'"/>
                    </div>
                    <div class="w-50 last-button">
                        <Button :label="'بارگذاری گواهینامه'"/>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="گواهینامه محمد محمدی">
                   <div class="d-flex">
                    <div class="w-50 first-button">
                        <Button :label="'پرینت گواهینامه'"/>
                    </div>
                    <div class="w-50 last-button">
                        <Button :label="'بارگذاری گواهینامه'"/>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab header="گواهینامه محمد صادقی">
                   <div class="d-flex">
                    <div class="w-50 first-button">
                        <Button :label="'پرینت گواهینامه'"/>
                    </div>
                    <div class="w-50 last-button">
                        <Button :label="'گواهینامه رضا رضایی '"/>
                    </div>
                </div>
            </AccordionTab>
        </Accordion>
    </div>    
</template>
<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default {
    components : {Accordion , AccordionTab},
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.main-controller {
    padding: 20px 25px;
    .header-text{
        font-size: 12px;
        margin-bottom: 8px;
    }
}

.first-button{
    display: flex;
    justify-content: center;
    button{
        background: rgba(253, 175, 59, 1);
        border: none;
        font-size: 14px;
    }
}
.last-button{
    display: flex;
    justify-content: center;
    button{
        background: rgba(87, 204, 153, 1);
        border: none;
        font-size: 14px;
    }
}


::v-deep(.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon) {
    position: relative;
    right: 90%;
    transform: rotate(180deg);
    color: rgba(107, 114, 128, 1);
    font-size: 12px;
}

::v-deep(.p-accordion-header-text) {
    color: rgba(107, 114, 128, 1);
    font-size: 12px;
}

::v-deep(.p-accordion-header-link) {
    background: #ffff !important;
    border: none !important;
}

::v-deep(.p-accordion-content) {
    border: none !important;
}
</style>