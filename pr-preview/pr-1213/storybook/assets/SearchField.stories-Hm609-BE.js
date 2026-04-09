import{r as m,f as l,j as t}from"./iframe-ClXeNp7Y.js";import{S as d}from"./SearchField-WpfDrDvz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D0ABm-B8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Om4eb18p.js";import"./clsx-B-dksMZM.js";import"./Form-qcwhxik-.js";import"./useFocusRing-POYc96FQ.js";import"./index-B5A_pknU.js";import"./index-DKpewxE4.js";import"./Input-CF0F6MRL.js";import"./Hidden-CTszc8DE.js";import"./Button-CgOPhMO-.js";import"./useLabel-LLB3lTIC.js";import"./useLabels-0ROcCaA0.js";import"./useButton-CU4eTwNH.js";import"./FieldError-Crhqu9ff.js";import"./Text-Cbz9Nooi.js";import"./clsx-Ciqy0D92.js";import"./Text-Cmueb6gv.js";import"./RSPContexts-BJtrT3-R.js";import"./Group-D-xiGmRt.js";import"./useControlledState-ByDkBY5z.js";import"./useLocalizedStringFormatter-CQx72wD7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NBqz0STb.js";import"./useField-NTYDoh05.js";import"./TextField.module-DdivwlC8.js";import"./search-BQisV46l.js";import"./createLucideIcon-BfIBNwb-.js";import"./x-CsrInTiu.js";import"./useLocalizedStringFormatter-B6IkZiLP.js";import"./Button-Ck36yxFc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Zm76wuSE.js";import"./Collection-DiE6phJa.js";import"./index-BGvv924Y.js";import"./DragAndDrop-BABaDduq.js";import"./getScrollParent-BN1in3_E.js";import"./scrollIntoView-B4z0Rquo.js";import"./SelectionIndicator-DLieR0zk.js";import"./SelectionManager-kbtNASxS.js";import"./useEvent-CNppEzGs.js";import"./useDescription-DyutD6T1.js";import"./inertValue-MTc8I4JU.js";import"./useHighlightSelectionDescription-BL31JiPo.js";import"./useUpdateEffect-CclNl_36.js";import"./ListKeyboardDelegate-Bi3VR8XT.js";import"./useHasTabbableChild-DOoZDzeD.js";import"./Checkbox-B-Q2TNFr.js";import"./check-CU5xxFCZ.js";import"./useToggleState-BujLr_0C.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
