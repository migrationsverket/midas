import{r as m,f as l,j as t}from"./iframe-B_PHmpba.js";import{S as d}from"./SearchField-y6Z5_zp-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CLIWBICo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BLTu9tyH.js";import"./clsx-B-dksMZM.js";import"./Form-BtnSLaxH.js";import"./useFocusRing-pLoaDniN.js";import"./index-BnBRJ5Vs.js";import"./index-CohS7fjA.js";import"./Input-VaZa8qjF.js";import"./Hidden-Dyk48KDQ.js";import"./Button-BH_CQ35-.js";import"./useLabel-um5sn7L2.js";import"./useLabels-CuRAxugE.js";import"./useButton-Bt5iDQO5.js";import"./FieldError-BXXDRXhV.js";import"./Text-De6EL-yD.js";import"./clsx-Ciqy0D92.js";import"./Text-CtWvGN0y.js";import"./RSPContexts-OmKNYCMF.js";import"./Group-B0H15syH.js";import"./useControlledState-Dbw9fj5d.js";import"./useLocalizedStringFormatter-BGDlAUue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BXmjhA9K.js";import"./useField-CIqjGijQ.js";import"./TextField.module-DdivwlC8.js";import"./search-DWHIkPx8.js";import"./createLucideIcon-Dp1bKuvD.js";import"./x-Cqzwa68L.js";import"./useLocalizedStringFormatter-B5yN6xVU.js";import"./Button-Bu0PoYIz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-_6q0RJ_b.js";import"./Collection-BKVVAs3j.js";import"./index-DOWGX5s9.js";import"./DragAndDrop-CyVd8KlK.js";import"./getScrollParent-CcwRz91U.js";import"./scrollIntoView-DSAWaCcr.js";import"./SelectionIndicator-B_mzrc3_.js";import"./SelectionManager-DS0VawDx.js";import"./useEvent-CJsDiKXk.js";import"./useDescription-DqrvnjB2.js";import"./inertValue-B7MlWKti.js";import"./useHighlightSelectionDescription-DHV7QgAE.js";import"./useUpdateEffect-B1sG2A35.js";import"./ListKeyboardDelegate-BPjl3m2i.js";import"./useHasTabbableChild-DzPK28Hw.js";import"./Checkbox-DGkhpH_a.js";import"./check-DgDscPoG.js";import"./useToggleState-CZo2MsPH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
