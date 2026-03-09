import{r as m,f as l,j as t}from"./iframe-ESF-r1hI.js";import{S as d}from"./SearchField-VOknMkj7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-EfGOmue_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0upRdKE.js";import"./utils-B0s5fgWj.js";import"./useLocalizedStringFormatter-DH7rPe2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrxeIxzN.js";import"./useFocusRing-DWp5OAg6.js";import"./index-2wIi_N-m.js";import"./index-BL-qZJpS.js";import"./useFormValidation-q6fwbQvy.js";import"./useField-D7_xKp9T.js";import"./Button-Cij6yxlb.js";import"./Hidden-8yjMqO1d.js";import"./useLabels-Bp-m2sF3.js";import"./useButton-Ct9_-x7Y.js";import"./search-DXvbffoN.js";import"./createLucideIcon-BJanraGz.js";import"./ClearButton-BUkH-Uzm.js";import"./Button-DBeVImox.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-ymkSIqCa.js";import"./VisuallyHidden-BGIl5X-2.js";import"./x-eQRUNgLt.js";import"./FieldError-BCCALKVT.js";import"./Text-NxgWluAD.js";import"./Text-BkzjukVf.js";import"./RSPContexts-DFpIO6wb.js";import"./Collection-DODwhPWl.js";import"./index-DJA38pYL.js";import"./DragAndDrop-BwAIjLLk.js";import"./getScrollParent-C9qHydg-.js";import"./scrollIntoView-CgwOiqxC.js";import"./SelectionIndicator-C-v19xF_.js";import"./SelectionManager-DZ0w-lAX.js";import"./useEvent-FPTcD_7V.js";import"./useDescription-CmcHNEVN.js";import"./inertValue-CQd_De5d.js";import"./useHighlightSelectionDescription-4zlQHbIK.js";import"./useUpdateEffect-DF6SBcO2.js";import"./ListKeyboardDelegate-D_hL1lvP.js";import"./useHasTabbableChild-CKXN2cBX.js";import"./Checkbox-BcrlF5SI.js";import"./Form-CgSXcs5h.js";import"./check-CPtGnB92.js";import"./useToggleState-Cw60xSpD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
