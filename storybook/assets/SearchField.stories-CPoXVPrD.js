import{r as m,f as l,j as t}from"./iframe-RkEpx7ni.js";import{S as d}from"./SearchField-NFRKNZ9I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BHtAldWZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CwCz7UAe.js";import"./utils-B679VK9X.js";import"./useLocalizedStringFormatter-DI3yj5Q3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMtMV5Wa.js";import"./useFocusRing-BlNPnF8L.js";import"./index-goo2gDrg.js";import"./index-DxX5hx9t.js";import"./useFormValidation-C6JG9BVC.js";import"./useField-BVTdh--K.js";import"./Button-g4l6mPYD.js";import"./Hidden-CZ7CBwUl.js";import"./useLabels-xGg1dRYQ.js";import"./useButton-KyyZ2_fP.js";import"./search-D96m3yEm.js";import"./createLucideIcon-cwFcj7Hk.js";import"./ClearButton-CaE24mNO.js";import"./Button-DYQbXjbn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPcGQfa-.js";import"./VisuallyHidden-Bkb3QPlD.js";import"./x-BKxU2Zo_.js";import"./FieldError-BBX_Ykc_.js";import"./Text-BGMtfqCs.js";import"./Text-C1lDc3gF.js";import"./RSPContexts-C64Y1eJJ.js";import"./Collection-CgY1rek1.js";import"./index-DcJwTbuE.js";import"./DragAndDrop-BfWoPpZ6.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dt95h1eU.js";import"./SelectionManager-BVsm7uU1.js";import"./useEvent-B7oskemw.js";import"./useDescription--nrXx0r0.js";import"./inertValue-DG91Xsqk.js";import"./useHighlightSelectionDescription-DJDLqkdC.js";import"./useUpdateEffect-pWKCvgEg.js";import"./ListKeyboardDelegate-_gXQplax.js";import"./useHasTabbableChild-XFjwyERt.js";import"./Checkbox-WgPhiaW7.js";import"./Form-D_eVyLWz.js";import"./check-DlYK4A6P.js";import"./useToggleState-Bb6VMlwf.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
