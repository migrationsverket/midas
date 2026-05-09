import{r as m,f as l,j as t}from"./iframe-W4nJ5fCl.js";import{S as d}from"./SearchField-BxgoCkF6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D4tGmCuB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BMpeEmxJ.js";import"./clsx-B-dksMZM.js";import"./Form-woZLC3Si.js";import"./useFocusRing-CHaZCxXN.js";import"./index-DEBoppYt.js";import"./index-rtxYMlVc.js";import"./Input-D_GS_qQW.js";import"./Hidden-DgKJ7wvz.js";import"./Button-C7OXJw6w.js";import"./useLabel-BQqoQBPd.js";import"./useLabels-PCa51qdN.js";import"./useButton-CuGrHjI5.js";import"./FieldError-D3aP5cbk.js";import"./Text-7uFUvoRD.js";import"./clsx-Ciqy0D92.js";import"./Text-AfrZysmO.js";import"./RSPContexts-C3FuW2H8.js";import"./Group-Dyp7XMR1.js";import"./useControlledState-C1a0SOin.js";import"./useLocalizedStringFormatter-C2aEMzMq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BO0L5qHJ.js";import"./useField-BdE6-JOU.js";import"./TextField.module-DdivwlC8.js";import"./search-D9X1e7si.js";import"./createLucideIcon-DlNL3tyz.js";import"./x-DAORPWxu.js";import"./useLocalizedStringFormatter-B3mguR4f.js";import"./Button-Ic5TYFB0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6HiRHb8s.js";import"./Collection-BsD5Bj9-.js";import"./index-BSsmI8Ds.js";import"./DragAndDrop-9TeUsNxC.js";import"./getScrollParent-DNPkZ1s0.js";import"./scrollIntoView-wq7p_jb-.js";import"./SelectionIndicator-glRimQ0H.js";import"./SelectionManager-DP-ujGtA.js";import"./useEvent-BkKUNT6i.js";import"./useDescription-DtiWVPbn.js";import"./inertValue-jcFJzWAN.js";import"./useHighlightSelectionDescription-iQeGxq7n.js";import"./useUpdateEffect-DAB5lomn.js";import"./ListKeyboardDelegate-CmK4Ay-W.js";import"./useHasTabbableChild-Cf8JclQK.js";import"./Checkbox-BkZ8S9_Y.js";import"./check-BgO2sYse.js";import"./useToggleState-DVKc5F1D.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
