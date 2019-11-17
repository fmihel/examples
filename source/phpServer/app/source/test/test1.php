<?php

class Test1 extends Route {
    public function ajax_test1(){
        if ($this->is('test1')){
            return $this->result(array(1,2,3,4));
        }
    }
    
    public function ajax_test2(){
        if ($this->is('test2')){
            return $this->result("return test2");
        }
    }
    public function request(){

        if ($this->ajax_test1()) return true;
        if ($this->ajax_test2()) return true;

        return false;
    }
}

?>