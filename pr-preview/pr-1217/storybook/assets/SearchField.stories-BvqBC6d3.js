import{r as m,f as l,j as t}from"./iframe-DG8sLAOy.js";import{S as d}from"./SearchField-B-REUD8Q.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DPtzxskX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DLAFhier.js";import"./clsx-B-dksMZM.js";import"./Form-DJ7nF5qY.js";import"./useFocusRing-mNkvIRfY.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./Input-DLI75ww7.js";import"./Hidden-BYn-neub.js";import"./Button-e9hh4zze.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./FieldError-DWs4hNvn.js";import"./Text-BL7Sfi9Q.js";import"./clsx-Ciqy0D92.js";import"./Text-BnRQmBDY.js";import"./RSPContexts-CMJFVu7E.js";import"./Group-CI_3ak_E.js";import"./useControlledState-RiscT5mJ.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHNbyuqs.js";import"./useField-FnGI4Iq2.js";import"./TextField.module-DdivwlC8.js";import"./search-s6siFpFG.js";import"./createLucideIcon-CiRaq98A.js";import"./x-BslDqAEV.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Button-D1u3zQ32.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CYqYwLo_.js";import"./Collection-DfpZ8qtz.js";import"./index-Oda9nsrN.js";import"./DragAndDrop-BiiqF27R.js";import"./getScrollParent-BX7WBRu0.js";import"./scrollIntoView-DA1Ufw7z.js";import"./SelectionIndicator-DS6X-NPe.js";import"./SelectionManager-BfKQiKi4.js";import"./useEvent-VtbUIOmB.js";import"./useDescription-CvEQI5cY.js";import"./inertValue-dHGkPW8V.js";import"./useHighlightSelectionDescription-Dd0ZnpbZ.js";import"./useUpdateEffect-3Gy1iKnt.js";import"./ListKeyboardDelegate-CxhQww-5.js";import"./useHasTabbableChild-DOtiguyb.js";import"./Checkbox-B7G0NvAw.js";import"./check-BcoezpGd.js";import"./useToggleState-DRNV_nZF.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
