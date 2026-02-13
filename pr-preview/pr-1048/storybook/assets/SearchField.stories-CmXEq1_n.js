import{r as m,f as l,j as t}from"./iframe-CMe2wz4D.js";import{S as d}from"./SearchField-kBhfIqRW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CY4psQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D13p9GBW.js";import"./utils-DJ_hucLj.js";import"./useLocalizedStringFormatter-jsgjsUy3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-iNeEMnQf.js";import"./useFocusRing-DN312JKd.js";import"./index-UTABmGgd.js";import"./index-DgLmdWsP.js";import"./useFormValidation-Btd0Kabf.js";import"./useField-B4tU80Yq.js";import"./Button-BuypZ7Sp.js";import"./Hidden-Cq5lhTG-.js";import"./number-DfkVkf0F.js";import"./useLabels-BVLipinj.js";import"./useButton-CdtNP3fm.js";import"./search-DDVPHe8e.js";import"./createLucideIcon-Bteudlm4.js";import"./ClearButton-BHG2ilKa.js";import"./Button-CDQv5njw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fpyssM3k.js";import"./VisuallyHidden-BaQWCrYN.js";import"./x-BEfRANP2.js";import"./FieldError-CqK9CxSD.js";import"./Text-DbDESw7Z.js";import"./Text-C6IcTtvN.js";import"./RSPContexts-roL6tJu5.js";import"./Collection-OdPW2hIZ.js";import"./index-C3DfPzTs.js";import"./DragAndDrop-DJBSOJ3p.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcYQgJau.js";import"./SelectionManager-D-1hvZxs.js";import"./useEvent-cUwG2woL.js";import"./useDescription-jTYbaPrg.js";import"./inertValue-bWsti3V8.js";import"./useHighlightSelectionDescription-DKZt5e2c.js";import"./useUpdateEffect-B1xkN5aE.js";import"./ListKeyboardDelegate-CVSZe2G2.js";import"./useHasTabbableChild-OSarYhmZ.js";import"./Checkbox-Bhil4Ngs.js";import"./Form-CsarTKga.js";import"./check-COvI9_G8.js";import"./useToggleState-vdrqyYni.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
