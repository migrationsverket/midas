import{r as m,f as l,j as t}from"./iframe-CUW_txz6.js";import{S as d}from"./SearchField-B9lZzZHK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DVgxEJrG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./Form-DNzUj6ms.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./Input-DpnB_kNM.js";import"./Hidden-C6dZGZNF.js";import"./Button-DJT34vsz.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./FieldError-BBiP0jfO.js";import"./Text-Bi2kB5GC.js";import"./clsx-Ciqy0D92.js";import"./Text-DvPi9pFM.js";import"./RSPContexts-DYx0iF5j.js";import"./Group-C3Ht6QcB.js";import"./useControlledState-BuDrosJG.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOX9ofpd.js";import"./useField-CLP_zsZ0.js";import"./TextField.module-DdivwlC8.js";import"./search-B3IGxyAp.js";import"./createLucideIcon-Cc0DwuLE.js";import"./x-pwSsQ8xV.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2eTcyAK.js";import"./Collection-3mxxC9eU.js";import"./index-DjmmA6Oh.js";import"./DragAndDrop-oQdb3Ig6.js";import"./getScrollParent-DWW6JN_D.js";import"./scrollIntoView-D8kVtkIc.js";import"./SelectionIndicator-Byd9q1Hf.js";import"./SelectionManager-aJ-j4EKa.js";import"./useEvent-CHrrjSKK.js";import"./useDescription-DeV7fvLF.js";import"./inertValue-Bfj06wpd.js";import"./useHighlightSelectionDescription-BU8VFG1L.js";import"./useUpdateEffect-BFPmFjx-.js";import"./ListKeyboardDelegate-DyYd3gII.js";import"./useHasTabbableChild-BBqsLMs3.js";import"./Checkbox-CkRoptQj.js";import"./check-LolfXL1H.js";import"./useToggleState-DfZegFVL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
