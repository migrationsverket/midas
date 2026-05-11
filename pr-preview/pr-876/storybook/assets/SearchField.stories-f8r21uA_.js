import{r as m,f as l,j as t}from"./iframe-9chkR4gz.js";import{S as d}from"./SearchField-DCrtNj3g.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C1fW7Jmi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BlWKHGoz.js";import"./clsx-B-dksMZM.js";import"./Form-Rrz88-kW.js";import"./useFocusRing-WYiiq_Gm.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./Input-CBS4hqhQ.js";import"./Hidden-Bdzqqxyq.js";import"./Button-D4nJHmzm.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./FieldError-vZw2hMgY.js";import"./Text-MA5MIJQJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp0Bwi6j.js";import"./RSPContexts-CUGomGxG.js";import"./Group-DQRpK11V.js";import"./useControlledState-CLfBe7O7.js";import"./useLocalizedStringFormatter-D-8D6EPs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CsFl93VO.js";import"./useField-Bqq6-wKZ.js";import"./TextField.module-DdivwlC8.js";import"./search-BKgNoaUj.js";import"./createLucideIcon-BKKhyqi3.js";import"./x-2BQcGtH9.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./Button-Ci--O4pG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V1FUVsZ9.js";import"./Collection-BHv4QbOB.js";import"./index-Ca0qo15i.js";import"./DragAndDrop-CjLzTLlR.js";import"./getScrollParent-BfXegyuf.js";import"./scrollIntoView-sky0cFHJ.js";import"./SelectionIndicator-B__YK30t.js";import"./SelectionManager-Ccl2m8NF.js";import"./useEvent-Cgh5SQda.js";import"./useDescription-DPjbxax8.js";import"./inertValue-Bevr-SYm.js";import"./useHighlightSelectionDescription-d5X_FB75.js";import"./useUpdateEffect-Dgn7JV2t.js";import"./ListKeyboardDelegate-D9iFGFSm.js";import"./useHasTabbableChild-D-YEkew-.js";import"./Checkbox-D8FDNAzS.js";import"./check-BER4BaL4.js";import"./useToggleState-DzRKME7V.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
