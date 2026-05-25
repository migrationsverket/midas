import{r as m,f as l,j as t}from"./iframe-D_tI-LG6.js";import{S as d}from"./SearchField-DGvbeQrF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DgBkoYI6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BmuT-4CL.js";import"./clsx-B-dksMZM.js";import"./Form-CS_16PeS.js";import"./useFocusRing-DXI1PCCK.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./Input-BKFyFcr2.js";import"./Hidden-D7jFD7Zq.js";import"./Button-hSHq5h1Q.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./FieldError-CvwrOOlF.js";import"./Text-CULJXyXM.js";import"./clsx-Ciqy0D92.js";import"./Text-C08wpa18.js";import"./RSPContexts-C1Z7Vm5X.js";import"./Group-D4TlFZLJ.js";import"./useControlledState-D0L1s8oX.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-hLSUVIVT.js";import"./useField-kyr3UNB4.js";import"./TextField.module-DdivwlC8.js";import"./search-D3ssnlc9.js";import"./createLucideIcon-Cjn_t3BL.js";import"./x-QsPpT9iF.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./Button-GXHEwtjb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DzLaLv62.js";import"./Collection-B7H5xaqM.js";import"./index-BH9s9hTH.js";import"./DragAndDrop-n7p-jRJX.js";import"./getScrollParent-BgKCMS-7.js";import"./scrollIntoView-Bwch4vY3.js";import"./SelectionIndicator-B_gIlSD6.js";import"./SelectionManager-g-9xTfpe.js";import"./useEvent-BeOXJju6.js";import"./useDescription-T8zc5UX5.js";import"./inertValue-D8tmPgmL.js";import"./useHighlightSelectionDescription-9Tie2vim.js";import"./useUpdateEffect-DQ0Yok9k.js";import"./ListKeyboardDelegate-D_cKU6vh.js";import"./useHasTabbableChild-C1SXCPxw.js";import"./Checkbox-5pDCZ6HI.js";import"./check-0EX5xwFx.js";import"./useToggleState-Dqqiy3s8.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
