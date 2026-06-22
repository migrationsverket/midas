import{r as m,f as l,j as t}from"./iframe-Dzhbyx-V.js";import{S as d}from"./SearchField-CgpDBfsV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DcwvO6Ui.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CB1YxmUd.js";import"./clsx-B-dksMZM.js";import"./Form-D-cIW_uQ.js";import"./useFocusRing-DJW4L7nP.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./Input-DvtTB9MK.js";import"./Hidden-CFP4Nw8t.js";import"./Button-CBTAD5ia.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./FieldError-BKbX9qzJ.js";import"./Text-B9yiudZO.js";import"./clsx-Ciqy0D92.js";import"./Text--lu7STeo.js";import"./RSPContexts-BZBUf3ht.js";import"./Group-BeMwF-ca.js";import"./useControlledState-BsGPn7dI.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5k5GhGk.js";import"./useField-DQZemjAW.js";import"./TextField.module-DdivwlC8.js";import"./search-BDxQqsJE.js";import"./createLucideIcon-Daz74Vgk.js";import"./x-Daz8ULC7.js";import"./useLocalizedStringFormatter-CZwJWfDJ.js";import"./Button-DVuadbrT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BTnUWvIm.js";import"./Collection-Cyrn4hfM.js";import"./index-COsjAsAS.js";import"./DragAndDrop-CHN-VwzZ.js";import"./getScrollParent-BKCTdMaY.js";import"./scrollIntoView-CGVh69Nr.js";import"./SelectionIndicator-FpX-lNKX.js";import"./SelectionManager-CAcvLEQx.js";import"./useEvent-CM_jpF7d.js";import"./useDescription-CQR6r60R.js";import"./inertValue-zCRDij_W.js";import"./useHighlightSelectionDescription-aHgDV1Eq.js";import"./useUpdateEffect-C5ZCmitF.js";import"./ListKeyboardDelegate-D4rfyZ0F.js";import"./useHasTabbableChild-Cm9E3pEU.js";import"./Checkbox-CEMfl-qb.js";import"./check-Cz7yBD2d.js";import"./useToggleState-BLcO-Ek9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
