import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addWidget, checkWidget } from '../../Redux/actions.js';
import { toast } from 'react-toastify';




export function AddWidget({ show, handleClose, data }) {
    const dispatch = useDispatch();
    const [shownumber, setShowNumber] = useState(0);
    const [checkedStates, setCheckedStates] = useState({});

    useEffect(() => {
        const initialCheckedStates = {};
        data.categories.forEach((category) => {
            category.widgets.forEach((widget) => {
                initialCheckedStates[widget.id] = widget.checked;
            });
        });
        setCheckedStates(initialCheckedStates);
    }, [data]);

    const handleCheckboxChange = (widgetId) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [widgetId]: !prevState[widgetId],
        }));
    };

    const handleConfirm = () => {
        data.categories.forEach((category) => {
            category.widgets.forEach((widget) => {
                const isChecked = checkedStates[widget.id];
                if (isChecked !== widget.checked) {
                    dispatch(checkWidget(category.name, widget.id, isChecked));
                }
            });
        });
        handleClose();
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '700px' }}>
            <Offcanvas.Header closeButton className="addwidget-header">
                <Offcanvas.Title className="addwidget-title">Add Widget</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="addwidget-body">
                <div className="addwidget-content">
                    <p className="addwidget-description">Personalize your dashboard by adding the following widgets</p>
                    <div className="addwidget-tabs">
                        <div className="addwidget-tab">
                            <p className={shownumber === 0 ? 'active' : ''} onClick={() => setShowNumber(0)}>
                                CSPM
                            </p>
                            <p className={shownumber === 1 ? 'active' : ''} onClick={() => setShowNumber(1)}>
                                CWPP
                            </p>
                            <p className={shownumber === 2 ? 'active' : ''} onClick={() => setShowNumber(2)}>
                                Image
                            </p>
                            <p className={shownumber === 3 ? 'active' : ''} onClick={() => setShowNumber(3)}>
                                Ticket
                            </p>
                        </div>
                        <div className="addwidget-list">
                            {data.categories[shownumber].widgets.map((widget) => (
                                <div className="addwidget20" key={widget.id}>
                                    <input
                                        type="checkbox"
                                        id={`widget-checkbox-${widget.id}`}
                                        checked={checkedStates[widget.id]}
                                        onChange={() => handleCheckboxChange(widget.id)}
                                    />
                                    <label htmlFor={`widget-checkbox-${widget.id}`}>{widget.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="addwidget21">
                        <button onClick={handleClose}>Cancel</button>
                        <button onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}


export function AddWidgetModal({ show, handleClose, category }) {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const dispatch = useDispatch();

    const handleAddWidget = () => {
        if (widgetName && widgetText) {
            const newWidget = {
                id: Date.now(),
                name: widgetName,
                text: widgetText,
                checked: true
            };
            dispatch(addWidget(category.name, newWidget));
            handleClose();
            toast.success('Widget Added Successfully!');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Widget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="widgetName">
                        <Form.Label>Widget Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter widget name"
                            value={widgetName}
                            onChange={(e) => setWidgetName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="widgetText">
                        <Form.Label>Widget Text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter widget text"
                            value={widgetText}
                            onChange={(e) => setWidgetText(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddWidget}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}