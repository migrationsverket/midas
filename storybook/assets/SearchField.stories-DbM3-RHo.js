import{r as m,f as l,j as t}from"./iframe-f7w4ng_k.js";import{S as d}from"./SearchField-CzBsQ-Um.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DOVhH8i0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CsngUmKh.js";import"./clsx-B-dksMZM.js";import"./Form-B1Ks0hwY.js";import"./useFocusRing-D2_28YrY.js";import"./index-BPHMLxna.js";import"./index-AUNQREmD.js";import"./Input-MG-MEaLF.js";import"./Hidden-CTte53jM.js";import"./Button-Cc-TNn9L.js";import"./useLabels-C80eq718.js";import"./useButton-D4PZb1F-.js";import"./FieldError-CSW0NKF8.js";import"./Text-DxL6Rji7.js";import"./clsx-Ciqy0D92.js";import"./Text-KyyKZpMF.js";import"./RSPContexts-B8g52CrK.js";import"./Group-BH48pCuV.js";import"./useControlledState-HdtZioBu.js";import"./useLocalizedStringFormatter-Cul2dCid.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSx09bq-.js";import"./useField-BdJOpr4_.js";import"./TextField.module-DdivwlC8.js";import"./search-B39i6yHR.js";import"./createLucideIcon-BKDiJvQY.js";import"./x--g3_ok1a.js";import"./useLocalizedStringFormatter-BW0f4aMp.js";import"./Button-DjmPZJ5Y.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C0OILqoq.js";import"./Collection-DrdDzDeL.js";import"./index-gUPZ6ud7.js";import"./DragAndDrop-Cyb4SL71.js";import"./getScrollParent-RY3Tj0rv.js";import"./scrollIntoView-BbkBiiSm.js";import"./SelectionIndicator-CJWR_V4T.js";import"./SelectionManager-CKpI-EM2.js";import"./useEvent-CYtWltky.js";import"./useDescription-s0qvynA_.js";import"./inertValue-D_edHUYr.js";import"./useHighlightSelectionDescription-UpiuxiYA.js";import"./useUpdateEffect-C1TQlf8Q.js";import"./ListKeyboardDelegate-B3ktNGKK.js";import"./useHasTabbableChild-kW03O6c6.js";import"./Checkbox-V_0Hk-ks.js";import"./check-S7h6HYsC.js";import"./useToggleState-CXuL6Xj-.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
