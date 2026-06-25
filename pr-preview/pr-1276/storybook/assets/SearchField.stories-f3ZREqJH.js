import{r as m,f as l,j as t}from"./iframe-msAyXsP3.js";import{S as d}from"./SearchField-Bb46jmFG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DR7CJuif.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CNLzm5ks.js";import"./clsx-B-dksMZM.js";import"./Form-BzCO8y52.js";import"./useFocusRing-DUmFoS0u.js";import"./index-DbT8YmDW.js";import"./index-DdtKLc0f.js";import"./Input-uT8EL97e.js";import"./Hidden-1dN06UT8.js";import"./Button-CHXcA8G6.js";import"./useLabel-CSQCeGiL.js";import"./useLabels-CoFEN7CD.js";import"./useButton-o2FEXKT7.js";import"./FieldError-D_l8yWz1.js";import"./Text-B_o1aquN.js";import"./clsx-Ciqy0D92.js";import"./Text-O5KbKawX.js";import"./RSPContexts-iGd1ezyt.js";import"./Group-C9uwkwF3.js";import"./useControlledState-B9ayh_25.js";import"./useLocalizedStringFormatter-DPSc_3xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CTS6NHyV.js";import"./useField-BQiibDSC.js";import"./TextField.module-DdivwlC8.js";import"./search-BkZcNyRj.js";import"./createLucideIcon-DQiIjLik.js";import"./x-DoBtKp7e.js";import"./useLocalizedStringFormatter-DOzvk0aq.js";import"./Button-C2f__mC4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BM3YcZfp.js";import"./Collection-CPSpfntx.js";import"./index-6JCrDjhY.js";import"./DragAndDrop-BSn2N4R8.js";import"./getScrollParent-V1l4010l.js";import"./scrollIntoView-rdVvyk8L.js";import"./SelectionIndicator-CP3-12il.js";import"./SelectionManager-B3prKbih.js";import"./useEvent-C4mqR9gc.js";import"./useDescription-BVWBMn3A.js";import"./inertValue-_e7meeBD.js";import"./useHighlightSelectionDescription-DHI0TSON.js";import"./useUpdateEffect-BfKwOmMd.js";import"./ListKeyboardDelegate-Bs_ISgoC.js";import"./useHasTabbableChild-pZTq4Zi2.js";import"./Checkbox-cazLmGYG.js";import"./check-BzRf0bm1.js";import"./useToggleState-q2aSLgUg.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
