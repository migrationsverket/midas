import{r as m,f as l,j as t}from"./iframe-DynRW4HM.js";import{S as d}from"./SearchField-XbKv-ZqG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CXMVRCYt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-wI83z-IC.js";import"./clsx-B-dksMZM.js";import"./Form-0XQ-NRq9.js";import"./useFocusRing-Ccc6VB4N.js";import"./index-Dlo0bpld.js";import"./index-B5QOT-C7.js";import"./Input-CWhWt8lD.js";import"./Hidden-ilD6RPA6.js";import"./Button-CFOPGSLm.js";import"./useLabels-DQKocp6Q.js";import"./useButton-CnY6hm7P.js";import"./FieldError-CNSWJfvH.js";import"./Text-DyP2OCNX.js";import"./clsx-Ciqy0D92.js";import"./Text-CeGvnbH5.js";import"./RSPContexts-Cw8qzvbL.js";import"./Group-DdLW2_hW.js";import"./useControlledState-CKdYrkOm.js";import"./useLocalizedStringFormatter-pKVfkyKC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrCKTRDm.js";import"./useField-D6nWXFYm.js";import"./TextField.module-DdivwlC8.js";import"./search-Yh0lXLrO.js";import"./createLucideIcon-DGkkD8Qb.js";import"./x-Bsg9N661.js";import"./useLocalizedStringFormatter-D3oqCIEX.js";import"./Button-BvN-UdiG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HbDYDEMR.js";import"./Collection-BAgBqaGo.js";import"./index-yLTbmAG2.js";import"./DragAndDrop-m3c10eCW.js";import"./getScrollParent-Ck8UnBVY.js";import"./scrollIntoView-BeaiGgFN.js";import"./SelectionIndicator-Bokccf1O.js";import"./SelectionManager-DPIJMcll.js";import"./useEvent-D88FFhaJ.js";import"./useDescription-DGfjZI1Z.js";import"./inertValue-BDxgNgO6.js";import"./useHighlightSelectionDescription-E5YoQhH3.js";import"./useUpdateEffect-CsNgwcoF.js";import"./ListKeyboardDelegate-CdUfRLzn.js";import"./useHasTabbableChild-Rn2H7Ccg.js";import"./Checkbox-C7hcoQmp.js";import"./check-h-uz5W17.js";import"./useToggleState-DwgpWikH.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
