import{r as m,f as l,j as t}from"./iframe-D2QiFl1Q.js";import{S as d}from"./SearchField-CETqaq8I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-9RhShljR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-l7K5Cl0t.js";import"./utils-C8ZbQkE7.js";import"./useLocalizedStringFormatter-AJrWLMlk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGq00xI3.js";import"./useFocusRing-CBM371L3.js";import"./index-Cl8hPLRd.js";import"./index-McmNB2RO.js";import"./useFormValidation-BbQ0GoQK.js";import"./useField-CSsZ2u1C.js";import"./Button-jwqYg1go.js";import"./Hidden-Ec0HhwAs.js";import"./useLabels-By_yzmZ7.js";import"./useButton-q6SL79uh.js";import"./search-C5tadqRt.js";import"./createLucideIcon-D1IpgdG_.js";import"./ClearButton-C0dkSvxT.js";import"./Button-fUVp2AkT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lXxhePp3.js";import"./VisuallyHidden-LF61GAgF.js";import"./x-CxsNPW5G.js";import"./FieldError-DzMY0KoY.js";import"./Text-BwutiQ1I.js";import"./Text-Czz1G82J.js";import"./RSPContexts-CrDf2hpR.js";import"./Collection-Dj5rVQCZ.js";import"./index-D8q3UKih.js";import"./DragAndDrop-hK6s3wDl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CdqppYXN.js";import"./SelectionManager-4_hx7v1F.js";import"./useEvent-KlMFWHnu.js";import"./useDescription-BCN90KGy.js";import"./inertValue-BYJcJTjN.js";import"./useHighlightSelectionDescription-Ch5H8-D7.js";import"./useUpdateEffect-DVhd3ArW.js";import"./ListKeyboardDelegate-bQekQHSh.js";import"./useHasTabbableChild-BZxdgcJE.js";import"./Checkbox-1nb9OyPr.js";import"./Form-xBEu3dY3.js";import"./check-D6CX_mmE.js";import"./useToggleState-BSzGDfSw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
