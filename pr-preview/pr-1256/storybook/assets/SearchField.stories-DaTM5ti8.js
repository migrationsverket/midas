import{r as m,f as l,j as t}from"./iframe-CdIQ5N7i.js";import{S as d}from"./SearchField-CFglLwj7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CqKdnzw7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./Form-B0G4WvdU.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./Input-CYu6oXCT.js";import"./Hidden-BNc7AwrM.js";import"./Button-UiktFLbJ.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./FieldError-DJ-HR3RU.js";import"./Text-s2Qhe30V.js";import"./clsx-Ciqy0D92.js";import"./Text-uW2g-Rij.js";import"./RSPContexts-CLmzGhES.js";import"./Group-GT3GuVWM.js";import"./useControlledState-BRvuk5rm.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVCH004n.js";import"./useField-FRI832V4.js";import"./TextField.module-DdivwlC8.js";import"./search-DYeUipBH.js";import"./createLucideIcon-D9zj-qmC.js";import"./x-CLOMyykU.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BhdIXlKy.js";import"./Collection-BNNDqxaK.js";import"./index-CAdlUQcW.js";import"./DragAndDrop-CedDBIPt.js";import"./getScrollParent-B0hpSf3_.js";import"./scrollIntoView-DQzQ-CtO.js";import"./SelectionIndicator-C8xnssq6.js";import"./SelectionManager-DUIeCRl1.js";import"./useEvent-CJQiJoWr.js";import"./useDescription--y6wfX3r.js";import"./inertValue-jrKVrzGI.js";import"./useHighlightSelectionDescription-BbdOTscv.js";import"./useUpdateEffect-BbexS5oB.js";import"./ListKeyboardDelegate-BRa5xE-n.js";import"./useHasTabbableChild-BGPfUsA6.js";import"./Checkbox-DXLs4G_e.js";import"./check-BXs7CmDq.js";import"./useToggleState-B1x7r90V.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
