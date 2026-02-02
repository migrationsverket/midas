import{r as m,f as l,j as t}from"./iframe-D1MYXp-w.js";import{S as d}from"./SearchField-CToaL5-R.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-UobuXr2T.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bn7jLDvo.js";import"./utils-aWuB-QdR.js";import"./useLocalizedStringFormatter-nJ6vlP7S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FtFIiV-m.js";import"./useFocusRing-BMjUS9b1.js";import"./index-BxRInLIQ.js";import"./index-DKk9wEG4.js";import"./useFormValidation-BTUbGtWG.js";import"./useField-CxdzvUD5.js";import"./Button-Cu_o7jy-.js";import"./Hidden-BE2MqSt0.js";import"./useLabels-uwnDLehD.js";import"./useButton-DiNOWPXA.js";import"./search-DbZ3EuRU.js";import"./createLucideIcon-DypBOEHT.js";import"./ClearButton-C_gxgixu.js";import"./Button-CWi-yXwr.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH5t1GsE.js";import"./VisuallyHidden-DeZDzV12.js";import"./x-BSUoxe2E.js";import"./FieldError-DXvMK5mU.js";import"./Text-DFmQ5vZk.js";import"./Text-3-mIHV0D.js";import"./RSPContexts-KH8njxZF.js";import"./Collection-CHcS2qET.js";import"./index-PVZzuu0U.js";import"./DragAndDrop-CjQnObNZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2eBBNku.js";import"./SelectionManager-BLvmfdsR.js";import"./useEvent-D8uPwVMW.js";import"./useDescription-C4XQCS9x.js";import"./inertValue-DmF1X-qC.js";import"./useHighlightSelectionDescription-C9i9k0-o.js";import"./useUpdateEffect-tHk05p25.js";import"./ListKeyboardDelegate-CbOELCR-.js";import"./useHasTabbableChild-BpKR-eIw.js";import"./Checkbox-CsideKFy.js";import"./Form-HVkHuvxF.js";import"./check-xC0ovN8Y.js";import"./useToggleState-BbtE1viO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
