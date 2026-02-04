import{r as m,f as l,j as t}from"./iframe-CDpCa2C9.js";import{S as d}from"./SearchField-DINVPMsa.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BTmU1aC5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BHuEBeNc.js";import"./utils-D9b9ono-.js";import"./useLocalizedStringFormatter-nd4U6D0y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzH_KQQP.js";import"./useFocusRing-C59_FyC5.js";import"./index-DwmA2ogn.js";import"./index-70fJEBxr.js";import"./useFormValidation-BTJPfZtn.js";import"./useField-CcrXeUIf.js";import"./Button-CJrvF-ti.js";import"./Hidden-D4m7F3Ji.js";import"./useLabels-C5k7-KLd.js";import"./useButton-BrWdoxqT.js";import"./search-BE-EfrGO.js";import"./createLucideIcon-D3Pi_s-P.js";import"./ClearButton-hw0xisEh.js";import"./Button-Huv8tAxG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fHnA6nV5.js";import"./VisuallyHidden-pZHGOQBw.js";import"./x-CfHHzjmO.js";import"./FieldError-uEbEh-Jd.js";import"./Text-Cvru-1LU.js";import"./Text-BpJbL-li.js";import"./RSPContexts-8Jkfg-tI.js";import"./Collection-B5itjfdf.js";import"./index-DNOYjG2g.js";import"./DragAndDrop-Dwcqplzz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CIQKt0_T.js";import"./SelectionManager-DGRaZ6UT.js";import"./useEvent-cEyOWBqm.js";import"./useDescription-rjgwWDBk.js";import"./inertValue-BrzDxlVa.js";import"./useHighlightSelectionDescription-sgaTaobf.js";import"./useUpdateEffect-Bi6ELyZX.js";import"./ListKeyboardDelegate-BHqgzlqT.js";import"./useHasTabbableChild-CQq3uxDP.js";import"./Checkbox-DvdQjMk0.js";import"./Form-DXYU4X_v.js";import"./check-CkP6gXWg.js";import"./useToggleState-CEQye9iK.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
