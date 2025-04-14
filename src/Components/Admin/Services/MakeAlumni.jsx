import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const MakeAlumni = () => {
    const [batch, setBatch] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        if (!batch) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please select a batch',
                confirmButtonColor: '#3085d6',
            });
            return;
        }

        setIsUpdating(true);

        try {
            const response = await axios.put(
                'http://localhost:9000/update-alumni',
                { batch },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                    confirmButtonColor: '#3085d6',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message,
                    confirmButtonColor: '#3085d6',
                });
            }
        } catch (error) {
            console.error('Update error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Failed to update alumni status',
                confirmButtonColor: '#3085d6',
            });
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="container pt-5 mt-5 d-flex justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-lg p-4 border-0 rounded-3">
                    <div className="card-body">
                        <h4 className="text-center text-primary mb-4">Make Students Alumni</h4>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Select Batch</label>
                                <select 
                                    className="form-select" 
                                    name="batch" 
                                    value={batch} 
                                    onChange={(e) => setBatch(e.target.value)}
                                    disabled={isUpdating}
                                >
                                    <option value="" disabled>Select Batch</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                </select>
                            </div>

                            <div className="text-center">
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-sm" 
                                    onClick={handleUpdate}
                                    disabled={isUpdating}
                                >
                                    {isUpdating ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Updating...
                                        </>
                                    ) : 'Update'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAlumni;