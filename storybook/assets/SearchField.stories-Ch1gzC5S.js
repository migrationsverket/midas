import{r as m,f as l,j as t}from"./iframe-BgNoMb1-.js";import{S as d}from"./SearchField-DcsXT52X.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bbbf70bd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cf4EtztR.js";import"./clsx-B-dksMZM.js";import"./Form-g0lbGPQc.js";import"./useFocusRing-CdEgrIPc.js";import"./index-C0ZyhkQq.js";import"./index-BH1r8cCI.js";import"./Input-49ZUx90E.js";import"./Hidden-Oz1FCPRp.js";import"./Button-DuzmOBcr.js";import"./useLabel-BFLzfKfJ.js";import"./useLabels-D5sc6rkA.js";import"./useButton-BqxH6UIc.js";import"./FieldError-HTMfHJDa.js";import"./Text-DTrIh8Ah.js";import"./clsx-Ciqy0D92.js";import"./Text-CfXADzCS.js";import"./RSPContexts-CioY2Bmm.js";import"./Group-C1jVMi99.js";import"./useControlledState-ITUua2kv.js";import"./useLocalizedStringFormatter-pefhPmo1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4Urw3d7.js";import"./useField-CNaw7VL2.js";import"./TextField.module-DdivwlC8.js";import"./search-BrdTLKrQ.js";import"./createLucideIcon-DvRkoRzG.js";import"./x-BxCihT4A.js";import"./useLocalizedStringFormatter-D0yQtf2N.js";import"./Button-gs8bFcYH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CAQ7uxZn.js";import"./Collection-C1oaDXsa.js";import"./index-DUHUFWaU.js";import"./DragAndDrop-q0ld2D0t.js";import"./getScrollParent-B4yHCD0_.js";import"./scrollIntoView-ByOssAro.js";import"./SelectionIndicator-AOCFd4Ui.js";import"./SelectionManager-DfWEJ--x.js";import"./useEvent-Cba8ocAv.js";import"./useDescription-Cy6BYOpX.js";import"./inertValue-CgO5NuJ7.js";import"./useHighlightSelectionDescription-4oKRVISM.js";import"./useUpdateEffect-BNg4x7Vy.js";import"./ListKeyboardDelegate-BBxKfJpx.js";import"./useHasTabbableChild-ePF862Rf.js";import"./Checkbox-PKJqdo5C.js";import"./check-BRUcxrpc.js";import"./useToggleState-DgQ1n61v.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
