import{r as m,f as l,j as t}from"./iframe-BwW6Fqvd.js";import{S as d}from"./SearchField-DgIJkAny.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BGSI7pol.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bghr1fcB.js";import"./clsx-B-dksMZM.js";import"./Form-C0ycgpGF.js";import"./useFocusRing-B8ItjY_Y.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./Input-p9o3LqS3.js";import"./Hidden-DOVwj0BP.js";import"./Button-zWxdU5Zd.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./FieldError-DG2mBVdw.js";import"./Text-CYDu8Dn_.js";import"./clsx-Ciqy0D92.js";import"./Text-D0nO-HBI.js";import"./RSPContexts-Bh9oL_fS.js";import"./Group-BXB9YxFU.js";import"./useControlledState-DGQCfKNy.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrtQoaTV.js";import"./useField-Cv7gnOSH.js";import"./TextField.module-DdivwlC8.js";import"./search-C8-PJggO.js";import"./createLucideIcon-baXbygoM.js";import"./x-BceaA5bl.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Button-D29dOr6P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6rJm-kLH.js";import"./Collection-DDKAL2kq.js";import"./index-C1W8SJ9q.js";import"./DragAndDrop-BumqeXUd.js";import"./getScrollParent-C7W5J6K6.js";import"./scrollIntoView-CvIpTomZ.js";import"./SelectionIndicator-Cf42c1mS.js";import"./SelectionManager-D0j-6TvJ.js";import"./useEvent-DMcK-jhf.js";import"./useDescription-DDaxYDi5.js";import"./inertValue-DGAH8tJD.js";import"./useHighlightSelectionDescription-B-pzx9aY.js";import"./useUpdateEffect-BOBlZ46l.js";import"./ListKeyboardDelegate-Mx-nXjyt.js";import"./useHasTabbableChild-DUPv12Ip.js";import"./Checkbox-DiRdmrc2.js";import"./check-BPKRsxYA.js";import"./useToggleState-QdsEKVSL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
