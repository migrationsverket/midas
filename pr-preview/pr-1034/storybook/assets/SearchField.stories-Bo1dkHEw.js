import{r as m,f as l,j as t}from"./iframe-Cs23SNnM.js";import{S as d}from"./SearchField-C_31Cjoz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CHwrw3y3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BY7I6-dG.js";import"./utils-C2_5pI3u.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChuvFLJ6.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./useFormValidation-jHVQBzvy.js";import"./useField-QHKuD7kq.js";import"./Button-CXOOs0ZW.js";import"./Hidden-lOkM-Rk2.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./search-Kvm4fgvm.js";import"./createLucideIcon-Cm58SIEr.js";import"./ClearButton-BemUPkw7.js";import"./Button-BCDZMRqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./VisuallyHidden-BbktJI4p.js";import"./x-DXozcBPC.js";import"./FieldError-B4JZATSQ.js";import"./Text-BDa847Zj.js";import"./Text-CyM4GXds.js";import"./RSPContexts-DaT_svkY.js";import"./Collection-BHf1D4jH.js";import"./index-BTAsETmW.js";import"./DragAndDrop-D0MWa1jw.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc3mSVfG.js";import"./SelectionManager-kFiYZswY.js";import"./useEvent-DER49hg5.js";import"./useDescription-DCoi52oS.js";import"./inertValue-DnQyvIVv.js";import"./useHighlightSelectionDescription-BfQ0wFF0.js";import"./useUpdateEffect-Brpp3OgC.js";import"./ListKeyboardDelegate-Cy4sz5Tt.js";import"./useHasTabbableChild-CqkfXhev.js";import"./Checkbox-ClujapYh.js";import"./Form-CVu0dRDh.js";import"./check-CqMkfClo.js";import"./useToggleState-BliHoc2i.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
