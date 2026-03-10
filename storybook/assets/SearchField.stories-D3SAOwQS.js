import{r as m,f as l,j as t}from"./iframe-DR5TyuB-.js";import{S as d}from"./SearchField-DbwqCUaF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B-42YLRX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CZJBEfwd.js";import"./utils-Bg7QEZnU.js";import"./useLocalizedStringFormatter-CWc-yWtF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BoXFmB-n.js";import"./useFocusRing-QfZ3-vOV.js";import"./index-D2JS04df.js";import"./index-LQ5iOOx9.js";import"./useFormValidation-1PHKSaOz.js";import"./useField-DdBHjb8J.js";import"./Button-BmNGs9rp.js";import"./Hidden-BEv0etPG.js";import"./useLabels-C7LvHmcE.js";import"./useButton-DuR77GJR.js";import"./search-inNts5vx.js";import"./createLucideIcon-BIu09S4H.js";import"./ClearButton-BK-wUsOO.js";import"./Button-C-s2hOqB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CkyMnK2W.js";import"./VisuallyHidden-BSWLvPww.js";import"./x-Cyfs5BQi.js";import"./FieldError-Cq9sQfrK.js";import"./Text-Bj_TB6m0.js";import"./Text-rstErEAJ.js";import"./RSPContexts-DfXBv57K.js";import"./Collection-CXIrHqSI.js";import"./index-BuE7dfrX.js";import"./DragAndDrop-Cbj-W5Wq.js";import"./getScrollParent-DwvwwXDB.js";import"./scrollIntoView-BBNsC_WK.js";import"./SelectionIndicator-Dt3rSARt.js";import"./SelectionManager-zatpPLut.js";import"./useEvent-CAO5kR0P.js";import"./useDescription-q7H7pmJx.js";import"./inertValue-WBwM9Ucy.js";import"./useHighlightSelectionDescription-6vh6C2dA.js";import"./useUpdateEffect-XwIGNp_G.js";import"./ListKeyboardDelegate-Bkc3dAxZ.js";import"./useHasTabbableChild-BmWVzAf0.js";import"./Checkbox-hzYBE45D.js";import"./Form-DQ5CyJFm.js";import"./check-ygnFdIWf.js";import"./useToggleState-w3v3WuFI.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
