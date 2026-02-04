import{r as m,f as l,j as t}from"./iframe-CdQJjHUi.js";import{S as d}from"./SearchField-DS6FBoa5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CC3M3IT5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C5Qq6LCr.js";import"./utils-DNRK4ZX5.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D2Mtsrjj.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./useFormValidation-C90I0bWA.js";import"./useField-VCpATz6H.js";import"./Button-BTABl2Ab.js";import"./Hidden-CC5jBV06.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./search-CJlHHIG5.js";import"./createLucideIcon-DPIpdseQ.js";import"./ClearButton-DNuwuD2Z.js";import"./Button-CglFoMow.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./VisuallyHidden-TcZUaxvx.js";import"./x-Uh3xubMW.js";import"./FieldError-CD4-cihP.js";import"./Text-B0vmQyu5.js";import"./Text-Ch7iewHE.js";import"./RSPContexts-AyfQfw_C.js";import"./Collection-Cmou-_XN.js";import"./index-WM4OD6W8.js";import"./DragAndDrop-C0KJPaYF.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CRnaVeBY.js";import"./SelectionManager-B-b6f446.js";import"./useEvent-B7b_rfbF.js";import"./useDescription-xXh2sHRV.js";import"./inertValue-DeH3pynO.js";import"./useHighlightSelectionDescription-BIw6NmsH.js";import"./useUpdateEffect-ACXC_gpN.js";import"./ListKeyboardDelegate-CpI5hNSW.js";import"./useHasTabbableChild-D0s_0Tzg.js";import"./Checkbox-BB_w9lli.js";import"./Form-Bi6e02ke.js";import"./check--ZlW5qxK.js";import"./useToggleState-B17h3d_d.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
