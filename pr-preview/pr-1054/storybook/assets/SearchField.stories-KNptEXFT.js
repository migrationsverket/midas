import{r as m,f as l,j as t}from"./iframe-BVjJh1qr.js";import{S as d}from"./SearchField-dwRSZVXM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Ll8Zw9OC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C9LVXWZ-.js";import"./utils-bNy6ojY5.js";import"./useLocalizedStringFormatter-D4nGqZ_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-YKtIDSyK.js";import"./useFocusRing-TW7q1EUd.js";import"./index-DIEHB-cs.js";import"./index-CNkeeaIr.js";import"./useFormValidation-SFdJ2boW.js";import"./useField-DNr4bZjA.js";import"./Button-BMjFxLp_.js";import"./Hidden-Cb128-qJ.js";import"./useLabels-Dp0cw4u-.js";import"./useButton-r4UQO9dh.js";import"./search-d1t8WHDx.js";import"./createLucideIcon-DI0VgPwY.js";import"./ClearButton-DGMWkimN.js";import"./Button-Dg78q2ju.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9aLA_6i.js";import"./VisuallyHidden-D-q2CDSj.js";import"./x-CeH2XBCE.js";import"./FieldError-C9WHVD5C.js";import"./Text-CsfvyS0Z.js";import"./Text-BB8xB_KG.js";import"./RSPContexts-4cSt6u6S.js";import"./Collection-JqSksE_3.js";import"./index-CVyQMNda.js";import"./DragAndDrop-DYNk6K5i.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLchoed_.js";import"./SelectionManager-BZ3YveyL.js";import"./useEvent-CcPYrnrS.js";import"./useDescription-MeYAog7E.js";import"./inertValue-DlRiQ4RG.js";import"./useHighlightSelectionDescription-BC8xtXdW.js";import"./useUpdateEffect-zOKT65gG.js";import"./ListKeyboardDelegate-cQjqjVFs.js";import"./useHasTabbableChild-2PYav4Tw.js";import"./Checkbox-CnJzUPvu.js";import"./Form-BTuogIHL.js";import"./check-CGQNQWQS.js";import"./useToggleState-Cq6kFsTE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
