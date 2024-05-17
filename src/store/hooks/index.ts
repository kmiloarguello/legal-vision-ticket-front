import { useDispatch, useSelector } from "react-redux";

import type { LegalVisionDispatch, LegalVisionState } from "store";

export const useLVDispatch = useDispatch.withTypes<LegalVisionDispatch>();
export const useLVSelector = useSelector.withTypes<LegalVisionState>();
