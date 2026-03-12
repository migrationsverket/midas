import{r as m,f as l,j as t}from"./iframe-DQVQza6Y.js";import{S as d}from"./SearchField-2JYTfjfB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DJJ-8wwE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaVALF-g.js";import"./utils-D-_RfQn2.js";import"./useLocalizedStringFormatter-Dx8dDRGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce1nkcbT.js";import"./useFocusRing-CBM0kVUN.js";import"./index-DiS2M8Ea.js";import"./index-CfbU1Mg4.js";import"./useFormValidation-BZrjYykE.js";import"./useField-2JEukHs2.js";import"./Button-BSDgymoN.js";import"./Hidden-Hezyv9Df.js";import"./useLabels-De2gA6Om.js";import"./useButton-B4zLsihB.js";import"./search-2hy6zlZB.js";import"./createLucideIcon-CuIMjDf_.js";import"./ClearButton-BjI_Gemj.js";import"./x-CJRhTqpy.js";import"./Button-BVp6tPBn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-IWYOBSFO.js";import"./VisuallyHidden-DtlR1Tt8.js";import"./FieldError-BFJVbEZW.js";import"./Text-BbABlkeP.js";import"./Text-CiNfpZ1d.js";import"./RSPContexts-ydiiyV1F.js";import"./Collection-C6Qbbb2e.js";import"./index-DkrK4_g-.js";import"./DragAndDrop-BIW4K5dA.js";import"./getScrollParent-CB6YDYVQ.js";import"./scrollIntoView-BNfA40iN.js";import"./SelectionIndicator-BXXptdDE.js";import"./SelectionManager-D_CKVvJd.js";import"./useEvent-Cy-UQw5n.js";import"./useDescription-DvP5wxQA.js";import"./inertValue-jkeJpqwy.js";import"./useHighlightSelectionDescription-D5BnEIfP.js";import"./useUpdateEffect-DR7_RC1V.js";import"./ListKeyboardDelegate-BFk2aK8l.js";import"./useHasTabbableChild-C9nHdI8P.js";import"./Checkbox-C34-LF3A.js";import"./Form-Cjn7PnmZ.js";import"./check-D_F7i4dn.js";import"./useToggleState-CuVwLYye.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
