import{r as m,f as l,j as t}from"./iframe-C_UZb0UH.js";import{S as d}from"./SearchField-Cw3UroPv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BL9i8JOV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BekthKbk.js";import"./utils-Dtmguja_.js";import"./useLocalizedStringFormatter-DsjdFjoX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DttPoMhe.js";import"./useFocusRing-wq3XW6c-.js";import"./index-wR3qBpGD.js";import"./index-Fx4upXIZ.js";import"./useFormValidation-CTOGsIgy.js";import"./useField-5YztNEa7.js";import"./Button-eLbcham7.js";import"./Hidden-BKqaL7Fi.js";import"./useLabels-BiEGdf9t.js";import"./useButton-WC7GcBqe.js";import"./search-BY3rl1PU.js";import"./createLucideIcon-BfmkpqwG.js";import"./ClearButton-DpuCl-Ec.js";import"./Button-BjJn1zqZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZJYQAWH.js";import"./VisuallyHidden--mkN2Z69.js";import"./x-BVuIxQT0.js";import"./FieldError-D3J2lHbG.js";import"./Text-AP-S6Ty1.js";import"./Text-CjhPc_0v.js";import"./RSPContexts-B5lp79pf.js";import"./Collection-00eAIKUn.js";import"./index-cLCQ2pnu.js";import"./DragAndDrop-CaT01feg.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DOZU75KG.js";import"./SelectionManager-DJjA2lCL.js";import"./useEvent-CZxhJAPd.js";import"./useDescription-D2LaqLM1.js";import"./inertValue-DH-CeBB2.js";import"./useHighlightSelectionDescription-vsROpl4t.js";import"./useUpdateEffect-2zMrK_VO.js";import"./ListKeyboardDelegate-BI-VV3g9.js";import"./useHasTabbableChild-mNBn_1uK.js";import"./Checkbox-BXr5A0pE.js";import"./Form-CYUJIrdr.js";import"./check-BlRCIA6u.js";import"./useToggleState-DHkGuPLe.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
