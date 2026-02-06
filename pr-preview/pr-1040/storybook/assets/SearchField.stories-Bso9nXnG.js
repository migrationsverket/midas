import{r as m,f as l,j as t}from"./iframe-BMyiRd9K.js";import{S as d}from"./SearchField-M5mRh1sY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-5hPmW78F.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CG4KMb6R.js";import"./utils-C26E_E_V.js";import"./useLocalizedStringFormatter-q3GhEdbW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaYoFozS.js";import"./useFocusRing-KDIp_VHj.js";import"./index-DzAiOFl3.js";import"./index-BSTk-fI9.js";import"./useFormValidation-BDXHTcoF.js";import"./useField-ChfD_3VJ.js";import"./Button-CcqdNx43.js";import"./Hidden-CbMhbGj6.js";import"./useLabels-BskVawR9.js";import"./useButton-C7s-887l.js";import"./search-Bd5K44JW.js";import"./createLucideIcon-7JtAUgGZ.js";import"./ClearButton-DXxguFuX.js";import"./Button-EwGc72xf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3VS7mKox.js";import"./VisuallyHidden-d5nRRxHR.js";import"./x-D1zGWb4X.js";import"./FieldError-DXRdy55K.js";import"./Text-BTUDznp2.js";import"./Text-DkNX6WfN.js";import"./RSPContexts-CBk9fMai.js";import"./Collection-DhlHljiD.js";import"./index-B9caRvqr.js";import"./DragAndDrop-DR16hRR_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8OkqnOyG.js";import"./SelectionManager-DB-NgXJU.js";import"./useEvent-CWlcVJ27.js";import"./useDescription-BgY-hAhj.js";import"./inertValue-D_rR7eJ_.js";import"./useHighlightSelectionDescription-CvXP--2C.js";import"./useUpdateEffect-Cr49JK7p.js";import"./ListKeyboardDelegate-Bwq4Qq2J.js";import"./useHasTabbableChild-C9bPJJz3.js";import"./Checkbox-B5zWfDp6.js";import"./Form-u1pt3U45.js";import"./check-Dz0b2Arz.js";import"./useToggleState-DONFwRk5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
