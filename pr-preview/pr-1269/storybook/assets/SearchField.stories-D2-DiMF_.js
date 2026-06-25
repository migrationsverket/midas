import{r as m,f as l,j as t}from"./iframe-Cc2x2NhL.js";import{S as d}from"./SearchField-CukuUO2M.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B0zxpY--.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./Form-Dzl391B-.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./Input-DhTCACkf.js";import"./Hidden-DXurTabA.js";import"./Button-ByJMIeTP.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./FieldError-l6QnCvwQ.js";import"./Text-D3p3B56u.js";import"./clsx-Ciqy0D92.js";import"./Text-DcE_bHZ_.js";import"./RSPContexts-0YfvD9LK.js";import"./Group-XJNTrNJv.js";import"./useControlledState-B_OZWkkq.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CO__Sljx.js";import"./useField-Dyc8N4z1.js";import"./TextField.module-DdivwlC8.js";import"./search-CthO0XbU.js";import"./createLucideIcon-DcmAEzc9.js";import"./x-BwuT2ktD.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Button-ClCBSbVd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CAnoPPmf.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./DragAndDrop-Y6czQqvz.js";import"./getScrollParent-D5jUw6gC.js";import"./scrollIntoView-BdS7fMnb.js";import"./SelectionIndicator-BhAuP5hr.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./useDescription-Djm_rT5S.js";import"./inertValue-NX4mGinj.js";import"./useHighlightSelectionDescription-BC5dhNcf.js";import"./useUpdateEffect-DRFRpbP7.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./useHasTabbableChild-ChPM18ed.js";import"./Checkbox-q8bzzOFZ.js";import"./check-C0FSLY3B.js";import"./useToggleState-Dsi2eB2f.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
