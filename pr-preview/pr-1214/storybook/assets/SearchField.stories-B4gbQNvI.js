import{r as m,f as l,j as t}from"./iframe-DmNPUwJF.js";import{S as d}from"./SearchField-DVEaY0N-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BENFkBTc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dh-PwKV8.js";import"./clsx-B-dksMZM.js";import"./Form-C6AulDIl.js";import"./useFocusRing-BP4HKvPD.js";import"./index-D7iFWbiU.js";import"./index-zqi-VihA.js";import"./Input-DQVad2MI.js";import"./Hidden-CmDSCNgN.js";import"./Button-CVX6slyJ.js";import"./useLabel-x3JXI5A6.js";import"./useLabels-Dtp6pYD3.js";import"./useButton-DpMfdXMB.js";import"./FieldError-CRuVxlm4.js";import"./Text-D0ZjjTeW.js";import"./clsx-Ciqy0D92.js";import"./Text-C7BN_W1g.js";import"./RSPContexts-DpZBoqVv.js";import"./Group-Cd9zdqZ4.js";import"./useControlledState-DBKo4wr0.js";import"./useLocalizedStringFormatter-B5MBjwfs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D__rASGL.js";import"./useField-Bj4uuUS8.js";import"./TextField.module-DdivwlC8.js";import"./search-HMFpM__q.js";import"./createLucideIcon-eE295ZHw.js";import"./x-DBWgEmNi.js";import"./useLocalizedStringFormatter-CqULl0lq.js";import"./Button-CBE5oTrg.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xsknM-vp.js";import"./Collection-CQ-RI5xj.js";import"./index-BjdTUwSH.js";import"./DragAndDrop-Dscpd9ki.js";import"./getScrollParent-B6jbGFnq.js";import"./scrollIntoView-BHhEhBj7.js";import"./SelectionIndicator-DM-PZYYV.js";import"./SelectionManager-CUL9zi1X.js";import"./useEvent-CAbHszQ8.js";import"./useDescription-DH7N6hrG.js";import"./inertValue-CQqrlTh2.js";import"./useHighlightSelectionDescription-BW7YdncF.js";import"./useUpdateEffect-D2ghUNgC.js";import"./ListKeyboardDelegate-Bq4OgiDK.js";import"./useHasTabbableChild-CLU42Ky2.js";import"./Checkbox-CzpNv62q.js";import"./check-D3BNvPAf.js";import"./useToggleState-CduY6doe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
