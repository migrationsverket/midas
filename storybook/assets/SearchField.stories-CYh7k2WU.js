import{r as m,f as l,j as t}from"./iframe-XBMlEgFB.js";import{S as d}from"./SearchField-gXNJQg6a.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DN0Hwi0L.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cc5G8ViG.js";import"./clsx-B-dksMZM.js";import"./Form-BpH7O1vT.js";import"./useFocusRing-DuQiYGUN.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./Input-CkG3ed09.js";import"./Hidden-DmPMVnI9.js";import"./Button-BzKQzIb5.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./FieldError-qc1sXTm5.js";import"./Text-86sbONsT.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ6aPD5a.js";import"./RSPContexts-CjMPhbqA.js";import"./Group-DqshiR4N.js";import"./useControlledState-DEjZXUVu.js";import"./useLocalizedStringFormatter-Bu_qbSQ2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C6M6X_qU.js";import"./useField-BMLfgxz1.js";import"./TextField.module-DdivwlC8.js";import"./search-D7f4Zctc.js";import"./createLucideIcon-CPar-zam.js";import"./x-BNnKlOhJ.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./Button-CkmlK4go.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4noZ6lE.js";import"./Collection-DcqgxSB4.js";import"./index-BPoFj_vg.js";import"./DragAndDrop-Cl-J26SD.js";import"./getScrollParent-D5DjdUZx.js";import"./scrollIntoView-BbcvzxoF.js";import"./SelectionIndicator-DiIFfW39.js";import"./SelectionManager-DqOOi4Gi.js";import"./useEvent-BKpTOEzW.js";import"./useDescription-BL_Y3ATo.js";import"./inertValue-CwIRCR-C.js";import"./useHighlightSelectionDescription-CsDa0XcW.js";import"./useUpdateEffect-NSOZ5sOg.js";import"./ListKeyboardDelegate-oxEhV0y3.js";import"./useHasTabbableChild-DQ7mqTPq.js";import"./Checkbox-ZkA_1OMK.js";import"./check-B2pw-0P_.js";import"./useToggleState-CDw3Cs3M.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
