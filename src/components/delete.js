import React from 'react'
import { useState } from 'react'
import useDelete from '../hooks/useDelete'
const Delete = () => {
    const [defaultStudents, students, deleteStudent] = useDelete();
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleDelete = (e) => {
        deleteStudent(name);
    }

    return (
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card my-3 mx-3">
                    <div class="card-body">
                        <div class="form-group row my-1">
                            <label for="list" class="col-md-2 form-label"><b>学生一覧:</b></label>
                            <label id="list" class="col-md-10 form-label">[{defaultStudents.join(', ')}]</label>
                        </div>
                        
                        <div class="form-group row my-1">
                            <label for="nameInput" class="col-md-2 form-label"><b>名前入力:</b></label>
                            <div class="col-md-8">
                                <input type="text" class="form-control form-control-sm" id="nameInput" value={name} onInput={handleChange}></input>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-secondary btn-sm" id="nameInput" onClick={handleDelete}>削除</button>
                            </div>
                        </div>
                        
                        <div class="form-group row my-1">
                            <label for="name" class="col-md-2 form-label"><b>名前:</b></label>
                            <label id="name" class="col-md-10">{name}</label>
                        </div>

                        <div class="form-group row my-1">
                            <label for="newlist" class="col-md-2 form-label"><b>位置:</b></label>
                            <label id="newlist" class="col-md-10 form-label">[{students.join(', ')}]</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     学生一覧：[{students.join(', ')}] <br/>
        //     検索名前：<input type='text' value={name} onChange={handleChange}/> <br/>
        //     <button onClick={handleSearch}>確定</button><br/>
        //     位置: {index + 1} <br/>
        //     名前: {students[index]} <br/>
        // </div>
    )
}

export default Delete