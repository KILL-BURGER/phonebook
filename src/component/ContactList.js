import React, {useEffect, useState} from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";

const ContactList = () => {
    const {contactList, word} = useSelector((state) => state);
    let [searchList, setSearchList] = useState([]);
    useEffect(() => {
        if (word !== '') {
            let searchList = contactList.filter((item) => item.name.name.includes(word));
            setSearchList(searchList);
        } else {
            setSearchList(contactList);
        }
    }, [word, contactList]);
    return <div>
        <div className='mb-2'>연락처 검색</div>
        <SearchBox/>
        {searchList.map((item, index) =>
            <ContactItem item={item} key={index}/>)}
    </div>;
};

export default ContactList;