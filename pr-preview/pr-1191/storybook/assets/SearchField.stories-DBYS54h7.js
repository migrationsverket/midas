import{r as m,f as l,j as t}from"./iframe-pPxe0wf0.js";import{S as d}from"./SearchField-CNp4PLPO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cvth79hm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9dfa99f.js";import"./clsx-B-dksMZM.js";import"./Form-C0IhYbR-.js";import"./useFocusRing-Brybz-Mb.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./Input-BSGVEsK2.js";import"./Hidden-BcuSkgl5.js";import"./Button-C0xfSFPn.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./FieldError-CL01H_85.js";import"./Text-CfRTLfl7.js";import"./clsx-Ciqy0D92.js";import"./Text-DnWwzkAf.js";import"./RSPContexts-B0SlvVRf.js";import"./Group-CnOF1J4U.js";import"./useControlledState-DALrvKda.js";import"./useLocalizedStringFormatter-BNao4Mdf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CIELF70r.js";import"./useField-D4Zx8Ibn.js";import"./TextField.module-DdivwlC8.js";import"./search-BzkylCNf.js";import"./createLucideIcon-DWvekaMf.js";import"./x-Ck7RLK17.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./Button-KC2D_O3S.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ByZgoMRK.js";import"./Collection-cPoObmDE.js";import"./index-DrsTtITg.js";import"./DragAndDrop-CABz6nco.js";import"./getScrollParent-Cau9qeJE.js";import"./scrollIntoView-Cgwn1ATY.js";import"./SelectionIndicator-BAq8fmHB.js";import"./SelectionManager-DlxymtZc.js";import"./useEvent-CKwa_4Ly.js";import"./useDescription-Ci3Nojex.js";import"./inertValue-Byp2eOie.js";import"./useHighlightSelectionDescription-Cimz9AKM.js";import"./useUpdateEffect-iJnE13oR.js";import"./ListKeyboardDelegate-CU8jHYVL.js";import"./useHasTabbableChild-DoUjtWhD.js";import"./Checkbox-CkhZFfwB.js";import"./check-OPaSFiPT.js";import"./useToggleState-BTN-c2BF.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
