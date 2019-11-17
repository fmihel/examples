<?php
class Route{
    public $pack = false;
    public $return = array();
    public $id      = 1;
    public $data = array();
    
    public function result($data){
        $this->return = array('res'=>1,'data'=>$data);
        return true;
    }
    public function error($msg,$res=0,$data=array()){
        $this->return = array('res'=>$res,'msg'=>$msg);
        if ($data!==array())
            $this->return[$data]=$data;
        return true;    
    }
    public function is($id){
        return ($id === $this->id);
    }
    public function request(){
        
    }

    
}
?>