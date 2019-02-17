pragma solidity >= 0.4.23;
pragma experimental ABIEncoderV2;
contract WRC {

    //authority
    address public regulator;
    //percentage of water reuse
    uint public minPercentage;

    struct IOTDevice {
        address orgID;
        string meterType;
        string reportedAt;

    }

    struct waterQuality {
        uint BOD;
        uint turbidity;
    }


    struct Readings {
        string startTime;
        string stopTime;
        uint quantity;
        waterQuality quality;
    }

    constructor() public {
        regulator = msg.sender;
    }

    //set a water reuse percentage
    function changeWRCPercentage(uint _value) public {
        require(msg.sender == regulator);
        minPercentage = _value;
    }


    //this will track a particular IOT device info
    mapping(address => IOTDevice) public IOTInfo;

    //this will give readings of a particular device
    mapping(address => Readings[]) public IOTReadings;


    //adding a new IOT meter by regualtor
    function addIOTDevice(address _meterID,address _orgID,string memory _meterType,string memory _reportedAt) public {
        require(msg.sender == regulator);
        IOTInfo[_meterID]=IOTDevice(_orgID,_meterType,_reportedAt);
    }

    //adding Readings of a device
    function addReadings(address _meterID,string memory startTime,string memory stopTime,uint quantity,uint BOD,uint turbidity) public {


        IOTReadings[_meterID].push(Readings(startTime,stopTime,quantity,waterQuality(BOD,turbidity)));

    }










}
