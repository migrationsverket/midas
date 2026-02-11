import{r as m,f as l,j as t}from"./iframe-BrSFSEso.js";import{S as d}from"./SearchField-BwhuP5-5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cysjs0RW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CqGR6b7a.js";import"./utils-CSLr47GB.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BpM0-sgz.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./useFormValidation-DYc4Vusd.js";import"./useField-BUD6g1mX.js";import"./Button-sstewYaM.js";import"./Hidden-bRkw9FY4.js";import"./number-DfkVkf0F.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./search-DXRNl31Q.js";import"./createLucideIcon-D7YZh2ey.js";import"./ClearButton-D7N3gLMf.js";import"./Button-D56CPdXD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./x-DQ48cbAb.js";import"./FieldError-C1wT0W68.js";import"./Text-CqAiKc3c.js";import"./Text-afjM-cTG.js";import"./RSPContexts-D6LnjnjF.js";import"./Collection-gPtAIt1S.js";import"./index-AqybnyRZ.js";import"./DragAndDrop-Bgc8lVW4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DsPVl8Wi.js";import"./SelectionManager-B_55B_zK.js";import"./useEvent-Bnvwx3ca.js";import"./useDescription-CgGPIItB.js";import"./inertValue-zXl0koWC.js";import"./useHighlightSelectionDescription-Ckkpcs12.js";import"./useUpdateEffect-DGwGMGOq.js";import"./ListKeyboardDelegate-CCJ1QruW.js";import"./useHasTabbableChild-Cj1tWk7l.js";import"./Checkbox-Bqk_h2hx.js";import"./Form-DcVXVRUN.js";import"./check-BaEfTwup.js";import"./useToggleState-BX32HchL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
