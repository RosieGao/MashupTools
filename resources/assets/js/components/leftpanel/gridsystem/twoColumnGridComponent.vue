<template>
    <div class="gridSystem">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/twocolumns.png">
            <span>Two Columns</span>
            <input type="text" class="form-control" placeholder="6 6" v-model="userInput">
        </div>
        <div class="view">
            <div class="row">
                <div class="column" v-bind:class="column1">
                </div>
                <div class="column" v-bind:class="column2">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
    export default{
        data(){
            return{
                userInput: '',
                isCorrect: false,
            }
        },

        computed:{
            column1: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[0] + " columndef" + this.getColumnList()[0]
                }
                return "col-xs-6 columndef6"
            },
            column2: function () {
                this.getColumnList();
                if (this.isCorrect){
                    return "col-xs-" + this.getColumnList()[1] + " columndef" + this.getColumnList()[1]
                }
                return "col-xs-6 columndef6"
            }
        },

        methods:{
            getColumnList: function(){
                this.isCorrect = false;
                var total = 0;
                var inputList = this.userInput.split(" ", 12);
                var outputList = [];
                $.each(inputList, function(inputList, item){
                    total += parseInt(item);
                });
                if (total == 12){
                    this.isCorrect = true;
                    $.each(inputList, function(inputList, item){
                        outputList.push(item)
                    });
                }
                return outputList
            }
        }
    }
</script>
