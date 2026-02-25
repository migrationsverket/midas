import{r as m,f as l,j as t}from"./iframe-qS8p8Yj8.js";import{S as d}from"./SearchField-BOx2rf-b.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CSrSjtO0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CazLd_oJ.js";import"./useObjectRef-C0Y2IBqc.js";import"./useLocalizedStringFormatter-TI3MlKMg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIUwoXuf.js";import"./useFocusRing-CdiqOQ6d.js";import"./useFocusable-C1cH2sYE.js";import"./index-Dkst7HIG.js";import"./index-D29fhoqb.js";import"./useFormValidation-qBecLUWh.js";import"./useField-fUevUNIW.js";import"./Button-DimkExxE.js";import"./utils-CLxZ6_kQ.js";import"./Hidden-mOYAz_FQ.js";import"./number-DfkVkf0F.js";import"./useLabels-CutYc3RI.js";import"./useButton-4It9SdDz.js";import"./search-Dx55Nbpc.js";import"./createLucideIcon-C52rh-_w.js";import"./ClearButton-AgFJKpQ0.js";import"./Button-B3ExRFXj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYia6YQs.js";import"./VisuallyHidden-oxQkvabd.js";import"./x-DvfJYKu-.js";import"./FieldError-C6jT-PXD.js";import"./Text-ClZ-RuRz.js";import"./Text-ByM0Af-l.js";import"./RSPContexts-lPk0mMUN.js";import"./Collection-BpTyFAxE.js";import"./CollectionBuilder-Bit_wJez.js";import"./index-CWnYM0ky.js";import"./DragAndDrop-C1sRD6_j.js";import"./getScrollParent-faTxr7gT.js";import"./scrollIntoView-DK04Y_7e.js";import"./SelectionIndicator-BzEbHyoW.js";import"./SelectionManager-VxFMphYm.js";import"./useEvent-V2R5wKyi.js";import"./useDescription-DGHlAMqD.js";import"./inertValue-BIG3nY_c.js";import"./useHighlightSelectionDescription-xr4hCI2U.js";import"./useUpdateEffect-DVv2Rr6W.js";import"./ListKeyboardDelegate-DVXQn_pi.js";import"./useHasTabbableChild-B45qqqJu.js";import"./Checkbox-CJskwSnQ.js";import"./Form-r98TiEr6.js";import"./check-DgXIPnCa.js";import"./useToggleState-Dc73esLz.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
