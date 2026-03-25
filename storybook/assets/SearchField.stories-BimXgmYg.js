import{r as m,f as l,j as t}from"./iframe-CS97_aKA.js";import{S as d}from"./SearchField-CoUoyq51.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bfow-GE6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Csn9hih_.js";import"./clsx-B-dksMZM.js";import"./Form-DngweuD1.js";import"./useFocusRing-D6iyZNHD.js";import"./index-DiAF0rSe.js";import"./index-B-J3B99e.js";import"./Input-D-LLVgDa.js";import"./Hidden-CZHel-hh.js";import"./Button-BEBLvHt_.js";import"./useLabels-BnGDleQi.js";import"./useButton-BQMSADAy.js";import"./FieldError-Bgv3wgUX.js";import"./Text-DllmWVRt.js";import"./clsx-Ciqy0D92.js";import"./Text-BsEp3Lpg.js";import"./RSPContexts-CFWUJItL.js";import"./Group-DvRkNrGw.js";import"./useControlledState-DJ6meZbb.js";import"./useLocalizedStringFormatter-DHK9UVHX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CX6Bbuo4.js";import"./useField-nSphnUF2.js";import"./TextField.module-DdivwlC8.js";import"./search-ZBB0_HlX.js";import"./createLucideIcon-CpkX-fVF.js";import"./x-BZc_-WXG.js";import"./useLocalizedStringFormatter-Qz3N5T4H.js";import"./Button-BxQXJJlf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-XYRUvUKq.js";import"./Collection-BApChUOw.js";import"./index-Cu6_2N_X.js";import"./DragAndDrop-D2IrE7zR.js";import"./getScrollParent-BvsZnnQg.js";import"./scrollIntoView-BRhOFysU.js";import"./SelectionIndicator-CwDxAhdf.js";import"./SelectionManager-BjwXPLp2.js";import"./useEvent-D0H0aX9U.js";import"./useDescription-ChcQRQvy.js";import"./inertValue-CB57SOz_.js";import"./useHighlightSelectionDescription-ChkJyETa.js";import"./useUpdateEffect-CRa_aiQE.js";import"./ListKeyboardDelegate-Dk3x5F9m.js";import"./useHasTabbableChild-C2YSxTy6.js";import"./Checkbox-DVqrVnSh.js";import"./check-DsaU-ucz.js";import"./useToggleState-087u5uom.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
