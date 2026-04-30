import{r as m,f as l,j as t}from"./iframe-CbAzJO9N.js";import{S as d}from"./SearchField-dkYXgcH7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D9zxr_iA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0jB1E5G.js";import"./clsx-B-dksMZM.js";import"./Form-VNKUe-wT.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./Input-D5NZNnfE.js";import"./Hidden-j-F0-7Lz.js";import"./Button-_5CpY_LG.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./FieldError-Q76E79z-.js";import"./Text-Cb6mQNAQ.js";import"./clsx-Ciqy0D92.js";import"./Text-B0GIqCDR.js";import"./RSPContexts-CdwstRL7.js";import"./Group-CDs_4aSR.js";import"./useControlledState-DjmxdyV_.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DYWRCY-s.js";import"./useField-CBtm8xuD.js";import"./TextField.module-DdivwlC8.js";import"./search-thn_6r5y.js";import"./createLucideIcon-lx1Wi4QI.js";import"./x-CrcasNM6.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dhjqn-q1.js";import"./Collection-D60D3pRD.js";import"./index-hbx092to.js";import"./DragAndDrop-CSoAywbo.js";import"./getScrollParent-4mlCzyaP.js";import"./scrollIntoView-CfANcw89.js";import"./SelectionIndicator-QNGy80KY.js";import"./SelectionManager-DBlz5uU6.js";import"./useEvent-VV5wi-lK.js";import"./useDescription-x0RZZUcB.js";import"./inertValue-BUO0npzR.js";import"./useHighlightSelectionDescription-DW6tD8JB.js";import"./useUpdateEffect-Bd9Eg1d3.js";import"./ListKeyboardDelegate-C6dnv3Af.js";import"./useHasTabbableChild-Dmzr6Kqx.js";import"./Checkbox-D23XgCFx.js";import"./check-BnsR9OmD.js";import"./useToggleState-C66aaA6a.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
